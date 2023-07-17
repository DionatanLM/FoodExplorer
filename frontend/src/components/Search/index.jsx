import { Container } from './styles'

export function Search({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}
