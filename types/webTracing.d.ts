interface InitProps {
  requestUrl:string
  appName:string
  appCode: string,
  appVersion: string,
  ext: string,
  debug: boolean,
  pvCore: boolean,
  pvHashtag: boolean,
  performanceCore: boolean,
  performanceFirstResource: boolean,
  performanceServer:boolean,
  errorCore:boolean,
  errorServer:boolean,
  eventCore: boolean,
  eventUnload: boolean,

  event:{core:boolean,unload:boolean}
}


declare module 'web-tracing' {
  namespace webtracing{
    // eslint-disable-next-line no-unused-vars
    const init :(configs:InitProps)=>void
  }
  export = webtracing
}
