import './emily-page.css';

export default function EmilyPage() {
  return (
    <div className="emily-container">
      <div className="emily-content">
        <div className="emily-notes">
          <a href="https://docs.google.com/document/d/1bpzahwRU4EU84pRzbPo9wfyq9pCrq1FuSy9e2z8Jg-Q/edit?usp=sharing" target="_blank" className="emily-note-button">React Notes</a>
          <a href="https://docs.google.com/document/d/16cAJJdatpbvNZBb159WOipV-JolKe0voUGsF9-ozYNU/edit?usp=sharing" target="_blank" className="emily-note-button">HTML/CSS/JS Notes</a>
          <a href="https://docs.google.com/document/d/1yIdKtqgwwj9LuTo_NSBRmMYtOYKXP94jr8n2HsugFxg/edit?usp=sharing" target="_blank" className="emily-note-button">Pranav's Homepage Code</a>
        </div>
        <div className="emily-name-row">
          <span className="emily-number emily-number-6">6</span>
          <h1 className="emily-name">Emily</h1>
          <span className="emily-number emily-number-7">7</span>
        </div>
        <a href="/james-kevin" className="emily-back-link">Back to Home</a>
      </div>
    </div>
  );
}
