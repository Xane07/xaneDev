const api = "http://localhost:6969/tasks";

const apiFetch = async () => {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  return data;
};

const postTasks = async () => {
  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Pratham",
      sName: "Pachori",
    }),
  });
  const data = await response.json();
  console.log(data);
};

const deleteTasks = async (...id) => {
  try {
    const response = await fetch(`http://localhost:6969/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
};
