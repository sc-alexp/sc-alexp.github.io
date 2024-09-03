---
layout: skeleton
title: Editor
---

<script src="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js"></script>

<div id="dynamic-row" class="row w-100 row-cols-1">
  <div class="col px-0">{% include editor.html %}</div>
  <div class="col px-0 preview">{% include preview.html %}</div>
</div>

<div class="fixed-bottom text-center opacity-50">
  <div
    class="btn-group m-2"
    role="group"
    aria-label="Basic radio toggle button group"
  >
    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio1"
      autocomplete="off"
      checked
    />
    <label class="btn btn-outline-secondary" id="btn-cols-1" for="btnradio1"
      ><i class="bi bi-square"></i
    ></label>

    <input
      type="radio"
      class="btn-check"
      name="btnradio"
      id="btnradio2"
      autocomplete="off"
    />
    <label class="btn btn-outline-secondary" id="btn-cols-2" for="btnradio2"
      ><i class="bi bi-layout-split"></i
    ></label>

  </div>
</div>

<script>
  document.getElementById("btn-cols-1").addEventListener("click", function () {
    var dynamicRow = document.getElementById("dynamic-row");
    dynamicRow.classList.remove("row-cols-2");
    dynamicRow.classList.add("row-cols-1");
  });

  document.getElementById("btn-cols-2").addEventListener("click", function () {
    var dynamicRow = document.getElementById("dynamic-row");
    dynamicRow.classList.remove("row-cols-1");
    dynamicRow.classList.add("row-cols-2");
  });

      document.addEventListener("DOMContentLoaded", function () {
        // Initialize Bootstrap tooltips
        var tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Initialize Showdown converter
        var converter = new showdown.Converter();

        // Function to update preview
        function updatePreview() {
          var markdownText = document.getElementById("editor-textarea").value;
          var html = converter.makeHtml(markdownText);
          document.getElementById("preview-content").innerHTML = html;
        }

        // Attach event listener to the textarea
        document.getElementById("editor-textarea").addEventListener("input", updatePreview);

        // Initial call to render any default content
        updatePreview();
      });
    </script>
