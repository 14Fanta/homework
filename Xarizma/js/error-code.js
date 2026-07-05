function errorFuncId(err) {
  console.error(`У вас ошибка ${err} id( Такого не существует ). `)
}

function error(msg) {
  console.error(msg);
}

function warn(msg) {
  console.warn(msg);
}

export { errorFuncId, error, warn };