---
layout: skeleton
title: Editor
---

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
</script>
