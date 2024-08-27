---
layout: skeleton
title: Editor
---

<div id="dynamic-row" class="row w-100 row-cols-1">
  <div class="col">{% include editor.html %}</div>
  <div class="col preview">Preview</div>
</div>

<div class="fixed-bottom text-center opacity-50">
  <div class="btn-group m-2" role="group" aria-label="Basic outlined example">
    <button id="btn-cols-1" type="button" class="btn btn-outline-secondary">
      <i class="bi bi-square"></i>
    </button>
    <button id="btn-cols-2" type="button" class="btn btn-outline-secondary">
      <i class="bi bi-layout-split"></i>
    </button>
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
</script>
