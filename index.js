const url = "/data.json";

// Elements
const graph = document.querySelector(".graph");

// Data
const getData = async (url) => {
  response = await fetch(url);
  data = await response.json();
  return data;
};

//Functions
const renderGraph = (data) => {
  data.forEach((day) => {
    const barContainer = `<div class="bar-container">
        <div class="total">$${day.amount}</div>
        <div class="bar" style="height:${day.amount * 2.7}px"></div>
        <div class="day">${day.day}</div>
      </div>`;

    graph.innerHTML += barContainer;
  });
  console.log(graph, data);
};

getData(url).then(renderGraph);
