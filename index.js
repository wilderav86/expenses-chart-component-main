const getData = async () => {
  let response = await fetch("/data.json");
  let data = await response.json();
  console.log(data);
};

getData();
