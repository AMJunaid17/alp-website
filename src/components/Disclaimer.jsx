// src/components/DisclaimerModal.jsx
import { useState, useEffect } from 'react';

export default function Disclaimer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
  const acknowledged = localStorage.getItem('disclaimerAcknowledged');
  if (!acknowledged) {
    setShow(true);
    // Pause animations by adding the class
    document.body.classList.add('pause-animations');
  } else {
    // If already acknowledged, make sure animations run
    document.body.classList.remove('pause-animations');
  }
}, []);


 const handleAcknowledge = () => {
  localStorage.setItem('disclaimerAcknowledged', 'true');
  setShow(false);

  // Enable animations by removing the paused class
  document.body.classList.remove('pause-animations');
};

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4><strong>DISCLAIMER:</strong></h4>
        <p>
          The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is established by your use of this website or by any communication through this site. You should not act or refrain from acting based on any information found on this website without seeking professional legal counsel specific to your situation.
        </p>
        <ul>
          <li>
            While we strive to keep the information on this site accurate and up to date, we make no warranties or representations regarding the completeness, accuracy, or reliability of any information contained herein. The content may be changed or updated without notice.
          </li>
          <li>
            Any links to third-party websites are provided for convenience only and do not imply endorsement or responsibility for the content of those sites.
          </li>
        </ul>
        <p>
          If you require legal advice or representation, please contact our office directly to schedule a consultation with one of our attorneys.
        </p>
        <button className="agree-button" onClick={handleAcknowledge}>I Agree</button>
      </div>
     <style jsx>{`
  .modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem; /* small padding for tiny screens */
    z-index: 9999;
  }
  .modal-content {
    background: #fff;
    color: #333;
    max-width: 600px;
    width: 100%;
    max-height: 90vh; /* new: keep height within viewport */
    overflow-y: auto; /* new: enable scroll inside modal */
    padding: 2rem;
    border-radius: 5px;
    font-family: Arial, sans-serif;
    text-align: left;
    line-height: 1.6;
  }
  .modal-content h4 {
    color: #520E24;
    margin-top: 0;
    text-transform: uppercase;
  }
  .modal-content ul {
    padding-left: 1.5rem;
  }
  .modal-content ul li {
    margin-bottom: 0.5rem;
  }
  .agree-button {
    margin-top: 1rem;
    background-color: #520E24;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-family: 'Space Grotesk', sans-serif;
  }
  .agree-button:hover {
    background-color: #400a1c;
  }
`}</style>

    </div>
  );
}
