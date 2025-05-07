function sectionSkillet() {
  const chooseButton = document.querySelectorAll(".choose-btn");
  const imgItem = document.querySelectorAll(".img-item");

  chooseButton.forEach((item) => {
    item.addEventListener("click", (e) => {
      const button = e.target.dataset.button;
      const activeButton = document.querySelectorAll(`.${button}`);
      console.log(activeButton);

      imgItem.forEach((item) => {
        item.classList.remove("img-item--active");
      });

      activeButton.forEach((item) => {
        item.classList.add("img-item--active");
      });
    });
  });
}

export default sectionSkillet;
