export const validarEmail = (e,target) => {
    e.preventDefault();
    const regExpr =
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/g;

    if (target.value === "" || !regExpr.test(target.value)) {
      target.nextElementSibling.classList.remove("d-none");
    } else {
      target.nextElementSibling.classList.add("d-none");
    }
}