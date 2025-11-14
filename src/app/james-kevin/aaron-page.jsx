export default function AaronPage() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Comic Sans MS, cursive, sans-serif", backgroundColor: "#fff8dc", padding: "20px", color: "black" }}>
      <style>
        {`
          h1 {
            color: red;
            font-size: 40px;
          }

          h2 {
            color: green;
            text-decoration: underline wavy lime;
          }

          img {
            border: 5px dashed hotpink;
            border-radius: 20px;
            margin-left: 10px;
            width: 150px;
            vertical-align: middle;
          }

          ul {
            background-color: lightgreen;
            border: 3px solid: green;
            border-radius: 10px;
            padding: 20px;
            margin: 20px auto;
            display: inline-block;
            text-align: left;
            color: black;
          }

          li {
            margin-bottom: 8px;
          }

          b {
            color: hotpink;
          }

          a {
            color: blue;
            font-weight: bold;
            text-decoration: underline wavy red;
          }

          hr {
            border: none;
            height: 5px;
            background: black;
          }

          p {
            font-size: 18px;
            color: black;
          }
        `}
      </style>

      <h1>
        Aaron Khaki-pants
        <img
          src="https://www.ernest.ca/cdn/shop/files/H20-001014-80201-KH.jpg?v=1708364541&width=2400"
        />
      </h1>

      <p>Year 2 Software Engineer (barely surviving)</p>
      <p>
        Days since I last showered: <b style={{ fontSize: "50px" }}>67</b>
      </p>
      <p>
        Hours of sleep since the beginning of the semester:{" "}
        <b style={{ fontSize: "50px" }}>6–7</b>
      </p>
      <p>
        Number of midterms that cooked me:{" "}
        <b style={{ fontSize: "50px" }}>6–7</b>
      </p>
      <p style={{ fontSize: "12px", color: "black" }}>Send help.</p>

      <hr />

      <h2>Khaki's Resume (pls hire me)</h2>
      <ul>
        <li><b>Position:</b> Doomscrolling Analyst</li>
        <li><b>Company:</b> Boston Doomscrolling Group</li>
        <li><b>Experience:</b> 3 years of serious doomscrolling</li>
        <li>
          <b>Skills:</b> Accidentally reposting a reel, strategic personality-based
          reel sending, reel feed optimization
        </li>
        <li><b>Achievements:</b> Achieved 25 hours of doomscrolling in 1 day</li>
      </ul>

      <a href="/james-kevin">Leave the best site ever</a>
    </div>
  );
}
