async function greet(){
  const res = await fetch('./')
  const data = await res.json();
  return data;

}