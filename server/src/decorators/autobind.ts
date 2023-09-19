// autobind decorator
export function autobind(_: any, _1: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);

      return boundFn;
    },
  };

  return adjDescriptor;
}

// export function bound(originalMethod: any, context: ClassMethodDecoratorContext) {
// 	const methodName = context.name;
// 	if (context.private) {
// 			throw new Error(`'bound' cannot decorate private properties like ${methodName as string}.`);
// 	}
// 	context.addInitializer(function () {
// 			this[methodName] = this[methodName].bind(this);
// 	});
// }
