import React, { useState } from 'react';

const ContactForm = (props) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleCommentChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

    const submitEmail = () => {

        const url = "https://feedback-3tggii3mlq-uc.a.run.app/feedback";
    
        const data = {
          "email": email,
          "comment": comment
        }
    
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              setFeedbackStatus("Error sending feedback.");
              return;
            }
            setFeedbackStatus("Feedback sent!");
          })
          .catch((error) => {
            setFeedbackStatus("Error sending feedback.");
          });
      };

    return <div className="email-container">
        {(feedbackStatus !== "") ? <p className="feedback-response">{feedbackStatus}</p> : undefined}
          <div>
            <p className="email-label">Email (Optional)</p>
            <input className="email-input" maxlength="100" type="email" onChange={handleEmailChange}></input>
          </div>
          <div>
            <p className="email-label">Comment</p>
            <textarea className="comment-input" data-limit-rows="true" maxlength="100" rows="5" onChange={handleCommentChange}></textarea>
          </div>
          <button onClick={() => submitEmail()}>Send Feedback</button>
    </div>
}

export default ContactForm;