export const validarNombre = (target) => {
    e.preventDefault();
    const regExpr = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g;

    if (
      target.value === "" ||
      target.value.length > 50 ||
      !regExpr.test(target.value)
    ) {
      target.nextElementSibling.classList.remove("d-none");
    } else {
      target.nextElementSibling.classList.add("d-none");
    }
};
