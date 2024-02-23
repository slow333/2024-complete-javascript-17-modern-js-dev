export default async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {title: data.at(-1).title, body:data.at(-1).body}
}