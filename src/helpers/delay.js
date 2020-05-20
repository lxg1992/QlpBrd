const delayAction = (
  functionToExecute,
  msDelay,
  timeoutGetter,
  timeoutSetter,
  optionalArg = null
) => {
  clearTimeout(timeoutGetter);

  timeoutSetter(
    setTimeout(() => {
      return functionToExecute(optionalArg);
    }, msDelay)
  );
};

export default delayAction;
