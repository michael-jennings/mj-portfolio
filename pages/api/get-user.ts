import { NowRequest, NowResponse } from '@now/node'

export default (_req: NowRequest, res: NowResponse) => {
  res.json({ name: 'John', email: 'john@example.com' })
}