const conversor = (divisa) => {
  return Number(divisa).toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
};

export default conversor;
