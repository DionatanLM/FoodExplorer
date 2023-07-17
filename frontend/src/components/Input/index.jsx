import { Container } from './styles'

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <input {...rest} />
    </Container>
  )
}
