import styled, {css} from 'styled-components';

const CardBoard = () => {
    return (
        <div>
            <CardBox>
                <Card>
                    <DesertImg
                        src={'https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaguu5Fsr7AB2rEjm9WGv-VdFicmPNJFZQMG8ehSSTQRuVgjUWT3Ztly3LfAp-a~wNj8Xtx-TW54ccnVeXLeqrRc4UpNGYRaK64918RMwsgvs1jfvf9SdifBzYwT5B~QS1ePeQW8PiGSetYkQlcB23DfYWK2zCORA8ktp1uyrBrigAitCdiXOWExWx6y4FYNlpaIQk45XtxZi1cKEnmgHx8r05p4MGRUQzIvFR3EO~aXQXhZ6k0h00IIWUE8Lr-Sdj4Y-hSFiTBVMfwo7Ud~bOp77G~0nGj14VR6VrCRmLR-qFbbh9k-hGwy78TB5HWOU~~HkECBkmNr6Egzgv1G2Q__'}></DesertImg>
                    <Headline>Headline</Headline>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>

                    <ButtonBox>
                        <Button primary>See more</Button>
                        <Button secondary>Save</Button>
                    </ButtonBox>
                </Card>
                <Card>
                    <DesertImg
                        src={'https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaguu5Fsr7AB2rEjm9WGv-VdFicmPNJFZQMG8ehSSTQRuVgjUWT3Ztly3LfAp-a~wNj8Xtx-TW54ccnVeXLeqrRc4UpNGYRaK64918RMwsgvs1jfvf9SdifBzYwT5B~QS1ePeQW8PiGSetYkQlcB23DfYWK2zCORA8ktp1uyrBrigAitCdiXOWExWx6y4FYNlpaIQk45XtxZi1cKEnmgHx8r05p4MGRUQzIvFR3EO~aXQXhZ6k0h00IIWUE8Lr-Sdj4Y-hSFiTBVMfwo7Ud~bOp77G~0nGj14VR6VrCRmLR-qFbbh9k-hGwy78TB5HWOU~~HkECBkmNr6Egzgv1G2Q__'}></DesertImg>
                    <Headline>Headline</Headline>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>

                    <ButtonBox>
                        <Button primary>See more</Button>
                        <Button secondary>Save</Button>
                    </ButtonBox>
                </Card>
                <Card>
                    <DesertImg
                        src={'https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaguu5Fsr7AB2rEjm9WGv-VdFicmPNJFZQMG8ehSSTQRuVgjUWT3Ztly3LfAp-a~wNj8Xtx-TW54ccnVeXLeqrRc4UpNGYRaK64918RMwsgvs1jfvf9SdifBzYwT5B~QS1ePeQW8PiGSetYkQlcB23DfYWK2zCORA8ktp1uyrBrigAitCdiXOWExWx6y4FYNlpaIQk45XtxZi1cKEnmgHx8r05p4MGRUQzIvFR3EO~aXQXhZ6k0h00IIWUE8Lr-Sdj4Y-hSFiTBVMfwo7Ud~bOp77G~0nGj14VR6VrCRmLR-qFbbh9k-hGwy78TB5HWOU~~HkECBkmNr6Egzgv1G2Q__'}></DesertImg>
                    <Headline>Headline</Headline>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>

                    <ButtonBox>
                        <Button primary>See more</Button>
                        <Button secondary>Save</Button>
                    </ButtonBox>
                </Card>

            </CardBox>
        </div>);
}
export default CardBoard;

const CardBox = styled.div`
    height: 100vh;
    display: flex; // выравнивание
    justify-content: center; // по 
    align-items: center; // центру
    gap: 30px;
    
    @media ${'screen and (max-width:800px)'} {
        flex-direction: column;
}
`
const Card = styled.div`
    width: 300px;
    height: 350px;
    background-color: #FFFFFF;
    border-radius: 15px;

    box-shadow: 0px 4px 20px 5px #0000001A; // Свойство принимает составное значение из пяти разных частей: горизонтальное смещение, вертикальное смещение, размытие, растяжение, цвет тени.
`
const DesertImg = styled.img`
    width: 280px;
    height: 170px;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;
`
const Headline = styled.h3`
    font-size: 16px;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 20px;
`
const Text = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #ABB3BA;
    width: 260px;
    height: 40px;

    margin-left: 20px;
    margin-top: 19px;
    
    line-height: 1.7;
`
type ButtonPropsType = {
    primary?: boolean
    secondary?: boolean
}
const ButtonBox = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    button + button { // если перед li есть li 
        margin-left: 12px;
    }
`
const Button = styled.button<ButtonPropsType>`
    border: none;
    width: 86px;
    height: 30px;
    border-radius: 5px;

    ${(props) => props.primary && css<ButtonPropsType>`
        background-color: #4E71FE;
        color: snow;
        font-weight: 700;
        font-size: 10px;
    `
    }

    ${(props) => props.secondary && css<ButtonPropsType>`
        background-color: transparent;
        color: #4E71FE;
        font-weight: 700;
        font-size: 10px;
        border: 2px solid #4E71FE;
    `
    }
`