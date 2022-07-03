export const validarMensaje = (target) => {
    e.preventDefault();
    const regExpr = /^.{1,300}$/g;

    if (
      target.value === "" ||
      target.value.length > 300 ||
      !regExpr.test(target.value)
    ) {
      target.nextElementSibling.classList.remove("d-none");
    } else {
      target.nextElementSibling.classList.add("d-none");
    }
}