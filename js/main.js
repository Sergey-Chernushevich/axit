const tabs = document.querySelectorAll(".tab-btn");
console.log(tabs);
const tabContents = document.querySelectorAll(".tab-info");
console.log(tabContents);
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("is-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    tabs[index].classList.add("is-active");
    tabContents[index].classList.add("is-active");
  });
});
