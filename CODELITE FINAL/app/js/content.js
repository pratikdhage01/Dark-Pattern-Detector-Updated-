const endpoint = "http://127.0.0.1:5000/";
const descriptions = {
    "Sneaking": "Coerces users to act in ways that they would not normally act by obscuring information.",
    "Urgency": "Places deadlines on things to make them appear more desirable.",
    "Misdirection": "Aims to deceptively incline a user towards one choice over the other.",
    "Social Proof": "Gives the perception that a given action or product has been approved by other people.",
    "Scarcity": "Tries to increase the value of something by making it appear to be limited in availability.",
    "Obstruction": "Tries to make an action more difficult so that a user is less likely to do that action.",
    "Forced Action": "Forces a user to complete extra, unrelated tasks to do something that should be simple.",
};

// Function to scrape the webpage for dark patterns
function scrape() {
    // Check if the page has already been analyzed
    if (document.getElementById("insite_count")) {
        return; // Exit if already analyzed
    }

    // Collect all text elements from the DOM
    let elements = segments(document.body);
    let filtered_elements = [];

    for (let element of elements) {
        let text = element.innerText.trim().replace(/\t/g, " ");
        if (text.length > 0) {
            filtered_elements.push(text);
        }
    }

    // Send collected elements to the backend for analysis
    fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tokens: filtered_elements }),
    })
    .then(resp => resp.json())
    .then(data => {
        let dp_count = 0;

        // Highlight elements with detected dark patterns
        for (let i = 0; i < elements.length; i++) {
            let text = elements[i].innerText.trim().replace(/\t/g, " ");
            if (text.length === 0) {
                continue; // Skip empty elements
            }

            if (data.result[i] !== "Not Dark") {
                highlight(elements[i], data.result[i]); // Highlight dark patterns
                dp_count++;
            }
        }

        // Store the count of dark patterns in a hidden element
        let countElement = document.createElement("div");
        countElement.id = "insite_count";
        countElement.value = dp_count; // Set the count
        countElement.style.opacity = 0;
        countElement.style.position = "fixed";
        document.body.appendChild(countElement);
        sendDarkPatterns(dp_count); // Send the count to the popup
    })
    .catch(error => {
        console.error("Error during scraping:", error);
        alert("An error occurred during analysis: " + error.message);
    });
}

// Function to highlight elements with dark patterns
function highlight(element, type) {
    element.classList.add("insite-highlight");

    let body = document.createElement("span");
    body.classList.add("insite-highlight-body");

    // Create header for dark pattern
    let header = document.createElement("div");
    header.classList.add("modal-header");
    let headerText = document.createElement("h1");
    headerText.innerHTML = type + " Pattern";
    header.appendChild(headerText);
    body.appendChild(header);

    // Create content for dark pattern
    let content = document.createElement("div");
    content.classList.add("modal-content");
    content.innerHTML = descriptions[type];
    body.appendChild(content);

    element.appendChild(body); // Append the highlight body to the element

    // Add click event listener to handle clicks on the highlighted content
    element.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the event from bubbling up to other elements

        // Change the background color to red
        element.style.backgroundColor = '#FF0000';

        // Show a popup to inform the user that they have clicked on a dark pattern
        alert('You have clicked on a dark pattern!');
    });
}

// Function to send the count of dark patterns to the popup
function sendDarkPatterns(number) {
    chrome.runtime.sendMessage({
        message: "update_current_count",
        count: number,
    });
}

// Message listener to trigger site analysis
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "analyze_site") {
        scrape();
    } else if (request.message === "popup_open") {
        let element = document.getElementById("insite_count");
        if (element) {
            sendDarkPatterns(element.value);
   }
}
});