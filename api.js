// export async function getVans() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   const data = await res.json();

//   return data;
// }

export async function getVans(id) {
  const url = id
    ? `https://jsonplaceholder.typicode.com/users${id}`
    : "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
}
