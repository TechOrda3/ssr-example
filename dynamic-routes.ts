const fs = require('node:fs');

async function generateDynamicRoutes() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (res.ok) {
    const users = await res.json();
    const userPaths = users.map((user: any) => `/users/${user.id}`).join('\n');

    fs.writeFileSync('routes.txt', userPaths);
  }
}

generateDynamicRoutes();
