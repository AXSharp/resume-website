document.addEventListener("DOMContentLoaded", function () {
    var documentationDiv = document.getElementById("documentation");

    collectionData.item.forEach(function (item) {
        var endpointDiv = document.createElement("div");
        endpointDiv.className = "endpoint";

        var endpointHeader = document.createElement("h2");
        endpointHeader.textContent = item.name;
        endpointDiv.appendChild(endpointHeader);

        var methodParagraph = document.createElement("p");
        methodParagraph.textContent = "Method: " + item.request.method;
        methodParagraph.className = "method-" + item.request.method.toLowerCase();
        endpointDiv.appendChild(methodParagraph);

        var urlParagraph = document.createElement("p");
        urlParagraph.innerHTML = "<strong>URL:</strong> " + item.request.url.raw;
        endpointDiv.appendChild(urlParagraph);

        if (item.request.header && item.request.header.length > 0) {
            var headersParagraph = document.createElement("p");
            headersParagraph.innerHTML = "<strong>Headers:</strong><br>" + formatHeaders(item.request.header);
            endpointDiv.appendChild(headersParagraph);
        }

        if (item.request.body && item.request.body.raw) {
            var requestBodyDiv = document.createElement("div");
            requestBodyDiv.className = "request-body";

            var codeSnippet = document.createElement("pre");
            codeSnippet.className = "code-snippet";
            var code = document.createElement("code");
            code.textContent = item.request.body.raw;
            codeSnippet.appendChild(code);

            var copyButton = document.createElement("button");
            copyButton.textContent = "Copy";
            copyButton.className = "copy-button";
            copyButton.addEventListener("click", function () {
                copyToClipboard(item.request.body.raw);
                copyButton.textContent = "Copied!";
            });

            requestBodyDiv.appendChild(copyButton);
            requestBodyDiv.appendChild(codeSnippet);
            endpointDiv.appendChild(requestBodyDiv);
        }

        documentationDiv.appendChild(endpointDiv);
    });
});

function formatHeaders(headers) {
    var headerNames = headers.map(function(header) {
        return header.key;
    });
    return headerNames.join(", ");
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        console.log("Text copied to clipboard");
    }).catch(function (error) {
        console.error("Error copying text to clipboard:", error);
    });
}
