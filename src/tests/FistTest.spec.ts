import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Charizard'

  expect(user.name).toEqual('Charizard')
})
