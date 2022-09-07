import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { ironOptions } from 'config/index'

interface reqProps extends NextApiRequest {
  body: string;
}
interface BodyProps {
  baseInfo:any
  eventInfo:any
}


async function getInfo(req: reqProps, res: NextApiResponse) {
  const { baseInfo, eventInfo } = JSON.parse(req.body) as BodyProps
  // 登录统计
  console.log(baseInfo, eventInfo)
  //
  res.status(200)
  res.send({
    msg: 'success',
    code: 200,
  })
}

export default withIronSessionApiRoute(getInfo, ironOptions)
