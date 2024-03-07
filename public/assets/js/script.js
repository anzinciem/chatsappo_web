document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var numbersInput = document.getElementById('numbers');
    var messageInput = document.getElementById('message');
  
    var numbers = numbersInput.value.split(',');
    var message = messageInput.value;
  
    if (numbers.length === 0 || message.trim() === '') {
      alert('Please enter recipient numbers and a message.');
      return;
    }
  
    // Loop through numbers and send messages
    for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i].trim();
  
      // Use Twilio API to send message
      // Replace 'YOUR_TWILIO_SID', 'YOUR_TWILIO_AUTH_TOKEN', and 'YOUR_TWILIO_PHONE_NUMBER' with your own values
      var url = 'https://api.twilio.com/2010-04-01/Accounts/YOUR_TWILIO_SID/Messages.json';
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa('YOUR_TWILIO_SID:YOUR_TWILIO_AUTH_TOKEN'));
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 201) {
            console.log('Message sent to ' + number);
          } else {
            console.log('Failed to send message to ' + number);
          }
        }
      };
      xhr.send('To=' + encodeURIComponent(number) + '&From=YOUR_TWILIO_PHONE_NUMBER&Body=' + encodeURIComponent(message));
    }
  
    numbersInput.value = '';
    messageInput.value = '';
  });