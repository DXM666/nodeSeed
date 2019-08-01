/**
 * defineModule(name:string, deps: string[], loadFn:Function)
 * @param name 模块的名称，请保持和目录名一致
 * @param deps 模块依赖，只需要填写要依赖的模块名称
 * @param loadFn 函数，在该函数中使用require导入模块
 */
declare var defineModule: Function;

module.exports = defineModule('temp', ['kendo-all'], () => {
    return require('../app.module');
});