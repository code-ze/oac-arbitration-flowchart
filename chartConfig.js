// Color categories for node types
var categories = [
  { name: "Claimant" }, // 0 - Blue
  { name: "Respondent" }, // 1 - Red
  { name: "OAC Registrar" }, // 2 - Green
  { name: "Tribunal" }, // 3 - Purple
  { name: "Emerg. Arbitrator" }, // 4 - Orange
  { name: "Parties" }, // 5 - Teal
];

// Chart configuration function
function getChartOption(data, title) {
  return {
    title: {
      text: title || "OAC Arbitration Process",
      left: "center",
      top: 20,
      textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2c3e50",
      },
    },
    tooltip: {
      show: false,
    },
    legend: [
      {
        show: false,
      },
    ],
    animation: true,
    series: [
      {
        type: "graph",
        layout: "none",
        symbolSize: 40,
        roam: true,
        zoom: 0.8, // Start with a slightly zoomed out view
        scaleLimit: {
          min: 0.3,
          max: 2,
        },
        label: {
          show: true,
          fontSize: 12,
          distance: 5,
          formatter: function (params) {
            // Shorten labels to reduce overlap
            let name = params.name;
            return name.length > 20 ? name.substring(0, 18) + "..." : name;
          },
        },
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 10,
          formatter: function (params) {
            if (params.data.label && params.data.label.formatter) {
              let text = params.data.label.formatter;
              return text.length > 12 ? text.substring(0, 10) + "..." : text;
            }
            return "";
          },
        },
        data: transformNodePositions(data.nodes),
        links: data.links,
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0.1, // Add slight curve to links to reduce overlap
        },
        categories: categories,
        emphasis: {
          lineStyle: {
            width: 5,
          },
          focus: "adjacency",
        },
      },
    ],
  };
}

// Function to transform node positions to increase spacing
function transformNodePositions(nodes) {
  // Create a deep copy to avoid modifying original data
  const transformedNodes = JSON.parse(JSON.stringify(nodes));

  // Scale factor to increase spacing
  const scaleFactor = 1.5;

  transformedNodes.forEach((node) => {
    // Scale the x and y positions to increase spacing
    node.x = node.x * scaleFactor;
    node.y = node.y * scaleFactor;
  });

  return transformedNodes;
}

// Initialize the chart
var chart;
var currentView = "main";
var currentZoom = 1.0;

function initChart() {
  // Initialize ECharts instance
  chart = echarts.init(document.getElementById("chart-container"), null, {
    renderer: "canvas",
    useDirtyRect: false,
  });

  // Set initial data with a specific zoom level for the main view
  currentZoom = 0.7;
  const options = getChartOption(
    mainProcessData,
    "OAC Arbitration Process Overview"
  );
  options.series[0].zoom = currentZoom;
  chart.setOption(options);

  // Enable chart click event
  chart.on("click", function (params) {
    if (params.dataType === "node") {
      showTooltip(params);
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    chart.resize();
  });

  // Initialize search
  initSearch();

  // Initialize zoom controls
  initZoomControls();

  // Set initial timeline text
  document.getElementById("timeline-text").textContent = timelineTexts.main;

  // Set active button
  setActiveButton("view-main");
}

// Initialize zoom controls
function initZoomControls() {
  const zoomInBtn = document.getElementById("zoom-in");
  const zoomOutBtn = document.getElementById("zoom-out");
  const zoomLevelEl = document.querySelector(".zoom-level");

  // Set initial zoom value
  updateZoomLevel(currentZoom);

  // Zoom in button
  zoomInBtn.addEventListener("click", function () {
    currentZoom = Math.min(currentZoom + 0.2, 2.0);
    chart.setOption({
      series: [
        {
          zoom: currentZoom,
        },
      ],
    });
    updateZoomLevel(currentZoom);
  });

  // Zoom out button
  zoomOutBtn.addEventListener("click", function () {
    currentZoom = Math.max(currentZoom - 0.2, 0.4);
    chart.setOption({
      series: [
        {
          zoom: currentZoom,
        },
      ],
    });
    updateZoomLevel(currentZoom);
  });

  // Update zoom level display
  function updateZoomLevel(zoom) {
    zoomLevelEl.textContent = Math.round(zoom * 100) + "%";
  }
}

// Timeline text updating
var timelineTexts = {
  main: "Average timeline: 9-12 months from Request to Award",
  emergency:
    "Emergency measures: Decision within 14 days of appointment (Art 19.11)",
  tribunal: "Tribunal constitution: Typically 4-6 weeks after Response",
  "post-award":
    "Post-award actions: Must be initiated within 28 days of award receipt",
  fees: "Administrative fees and arbitrator fees based on claim value (Art 42-47)",
};

// Custom tooltip handling
function showTooltip(params) {
  var node = params.data;
  var tooltipEl = document.getElementById("custom-tooltip");

  // Set tooltip content
  var content = "<h3>" + node.name + "</h3>";
  content += "<p>" + node.value + "</p>";

  if (node.article) {
    content += '<p class="article-ref">' + node.article + "</p>";
  }

  tooltipEl.innerHTML = content;

  // Position tooltip relative to the current view coordinates
  var [x, y] = chart.convertToPixel("grid", [node.x, node.y]);

  // Apply position adjustments to ensure tooltip is visible
  tooltipEl.style.left = x + 20 + "px";
  tooltipEl.style.top = y - 30 + "px";

  // Set max width to improve readability
  tooltipEl.style.maxWidth = "300px";

  // Show tooltip
  tooltipEl.style.display = "block";

  // Clear any existing timeout
  if (window.tooltipTimeout) {
    clearTimeout(window.tooltipTimeout);
  }
}

// Hide tooltip on click outside
document.addEventListener("click", function (e) {
  if (
    !e.target.closest("#chart-container") &&
    !e.target.closest("#custom-tooltip")
  ) {
    hideTooltip();
  }
});

function hideTooltip() {
  document.getElementById("custom-tooltip").style.display = "none";
}

// Set active button
function setActiveButton(id) {
  document.querySelectorAll(".view-btn").forEach(function (btn) {
    btn.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Initialize search functionality
function initSearch() {
  var searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function () {
    var query = this.value.toLowerCase().trim();
    if (query.length < 2) {
      hideSearchResults();
      return;
    }

    var results = searchNodes(query);
    showSearchResults(results);
  });

  document
    .getElementById("search-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      var query = searchInput.value.toLowerCase().trim();
      if (query.length >= 2) {
        var results = searchNodes(query);

        if (results.length > 0) {
          // Focus and highlight the first result
          focusNode(results[0].id);
        }
      }
    });
}

// Search through all nodes in all datasets
function searchNodes(query) {
  var allResults = [];
  var datasets = [
    { data: mainProcessData, name: "Main Process" },
    { data: emergencyArbitratorData, name: "Emergency Arbitrator" },
    { data: tribunalConstitutionData, name: "Tribunal Constitution" },
    { data: postAwardData, name: "Post-Award Actions" },
    { data: feesData, name: "Fees & Costs" },
  ];

  datasets.forEach(function (dataset) {
    dataset.data.nodes.forEach(function (node) {
      var nameMatch = node.name.toLowerCase().includes(query);
      var valueMatch = node.value.toLowerCase().includes(query);
      var articleMatch =
        node.article && node.article.toLowerCase().includes(query);

      if (nameMatch || valueMatch || articleMatch) {
        allResults.push({
          id: node.id,
          name: node.name,
          dataset: dataset.name,
          datasetId:
            dataset.data === mainProcessData
              ? "view-main"
              : dataset.data === emergencyArbitratorData
              ? "view-emergency"
              : dataset.data === tribunalConstitutionData
              ? "view-tribunal"
              : dataset.data === postAwardData
              ? "view-post-award"
              : "view-fees",
        });
      }
    });
  });

  return allResults;
}

// Show search results
function showSearchResults(results) {
  var resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found</p>";
  } else {
    var resultsList = document.createElement("ul");

    results.forEach(function (result) {
      var li = document.createElement("li");
      li.innerHTML =
        '<span class="result-name">' +
        result.name +
        '</span> <span class="result-dataset">(' +
        result.dataset +
        ")</span>";
      li.addEventListener("click", function () {
        // Switch to the appropriate view if needed
        if (document.getElementById(result.datasetId)) {
          document.getElementById(result.datasetId).click();
        }

        // Focus on the node
        focusNode(result.id);

        // Hide search results
        hideSearchResults();
      });
      resultsList.appendChild(li);
    });

    resultsContainer.appendChild(resultsList);
  }

  resultsContainer.style.display = "block";
}

// Hide search results
function hideSearchResults() {
  document.getElementById("search-results").style.display = "none";
}

// Focus on a specific node
function focusNode(nodeId) {
  // Get current data
  var currentData;
  switch (currentView) {
    case "main":
      currentData = mainProcessData;
      break;
    case "emergency":
      currentData = emergencyArbitratorData;
      break;
    case "tribunal":
      currentData = tribunalConstitutionData;
      break;
    case "post-award":
      currentData = postAwardData;
      break;
    case "fees":
      currentData = feesData;
      break;
  }

  // Find the node
  var node = currentData.nodes.find(function (n) {
    return n.id === nodeId;
  });

  if (node) {
    // Center view on the node
    chart.dispatchAction({
      type: "focusNodeAdjacency",
      seriesIndex: 0,
      dataIndex: currentData.nodes.indexOf(node),
    });

    // Show tooltip
    var params = {
      data: node,
      dataType: "node",
    };
    showTooltip(params);
  }
}

// Button event handlers
function addButtonEventListeners() {
  // Main process view button
  document.getElementById("view-main").addEventListener("click", function () {
    chart.setOption(
      getChartOption(mainProcessData, "OAC Arbitration Process Overview"),
      true
    );
    document.getElementById("timeline-text").textContent = timelineTexts.main;
    setActiveButton("view-main");
    currentView = "main";
    // Adjust zoom for this view
    currentZoom = 0.7;
    chart.setOption({
      series: [
        {
          zoom: currentZoom,
        },
      ],
    });
    document.querySelector(".zoom-level").textContent =
      Math.round(currentZoom * 100) + "%";
  });

  // Emergency Arbitrator view button
  document
    .getElementById("view-emergency")
    .addEventListener("click", function () {
      chart.setOption(
        getChartOption(emergencyArbitratorData, "Emergency Arbitrator Process"),
        true
      );
      document.getElementById("timeline-text").textContent =
        timelineTexts.emergency;
      setActiveButton("view-emergency");
      currentView = "emergency";
      // Adjust zoom for this view
      currentZoom = 0.9;
      chart.setOption({
        series: [
          {
            zoom: currentZoom,
          },
        ],
      });
      document.querySelector(".zoom-level").textContent =
        Math.round(currentZoom * 100) + "%";
    });

  // Tribunal Constitution view button
  document
    .getElementById("view-tribunal")
    .addEventListener("click", function () {
      chart.setOption(
        getChartOption(
          tribunalConstitutionData,
          "Tribunal Constitution Process"
        ),
        true
      );
      document.getElementById("timeline-text").textContent =
        timelineTexts.tribunal;
      setActiveButton("view-tribunal");
      currentView = "tribunal";
      // Adjust zoom for this view
      currentZoom = 0.8;
      chart.setOption({
        series: [
          {
            zoom: currentZoom,
          },
        ],
      });
      document.querySelector(".zoom-level").textContent =
        Math.round(currentZoom * 100) + "%";
    });

  // Post-Award Actions view button
  document
    .getElementById("view-post-award")
    .addEventListener("click", function () {
      chart.setOption(
        getChartOption(postAwardData, "Post-Award Actions"),
        true
      );
      document.getElementById("timeline-text").textContent =
        timelineTexts["post-award"];
      setActiveButton("view-post-award");
      currentView = "post-award";
      // Adjust zoom for this view
      currentZoom = 0.9;
      chart.setOption({
        series: [
          {
            zoom: currentZoom,
          },
        ],
      });
      document.querySelector(".zoom-level").textContent =
        Math.round(currentZoom * 100) + "%";
    });

  // Fees & Costs view button
  document.getElementById("view-fees").addEventListener("click", function () {
    chart.setOption(getChartOption(feesData, "Fees & Costs"), true);
    document.getElementById("timeline-text").textContent = timelineTexts.fees;
    setActiveButton("view-fees");
    currentView = "fees";
    // Adjust zoom for this view
    currentZoom = 0.9;
    chart.setOption({
      series: [
        {
          zoom: currentZoom,
        },
      ],
    });
    document.querySelector(".zoom-level").textContent =
      Math.round(currentZoom * 100) + "%";
  });
}

// Document ready function
document.addEventListener("DOMContentLoaded", function () {
  initChart();
  addButtonEventListeners();
});
