import {useState} from 'react'
import {
  MainContainer,
  CreditContainer,
  Heading,
  Headings,
  PaymentContainer,
  Image,
  CardContainer,
  Para,
  Paradiv,
  PaymentCards,
  Input,
  InputContainer,
} from './styledComponents'

const CreditCard = () => {
  const [accnum, setAccnum] = useState('')
  const [accName, setAccname] = useState('')

  const onChangeName = event => {
    setAccname(event.target.value)
  }

  const onChangeNumber = event => {
    setAccnum(event.target.value)
  }
  return (
    <MainContainer>
      <CreditContainer>
        <Heading>Credit Card</Heading>
        <Image>
          <CardContainer>
            <Paradiv>
              <Para>{accnum}</Para>
              <Para>Card holder name :: {accName}</Para>
            </Paradiv>
          </CardContainer>
        </Image>
      </CreditContainer>
      <PaymentContainer>
        <PaymentCards>
          <Headings>Payment</Headings>
          <InputContainer>
            <Input
              type="text"
              placeholder="card Number"
              onChange={onChangeNumber}
            />
            <Input
              type="text"
              placeholder="card Holder Name"
              onChange={onChangeName}
            />
          </InputContainer>
        </PaymentCards>
      </PaymentContainer>
    </MainContainer>
  )
}
export default CreditCard
