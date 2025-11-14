import './james-page.css';
export default function JamesPage() {
  return (
    <div>
      <h1>Hey! Welcome to James's Page. This is me</h1>
      <img 
      src="/pk-media/james.jpg"
      alt="Picture of James"
      style={{width:"300px"}}
      />
      <h2>I am from Milton Ontario, have 2 cats, and in CS 1st year</h2>

      <a href="/home">Back to Home</a>
    </div>
  );
}
