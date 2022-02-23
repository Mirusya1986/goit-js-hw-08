import lodash from 'lodash.throttle';

 const refs = {
     form:document.querySelector(".feedback-form"),
     email:document.querySelector(".feedback-form input"),
     textarea:document.querySelector(".feedback-form textarea")
 }
const FEEDBACK_STATE = "feedback-form-state";

