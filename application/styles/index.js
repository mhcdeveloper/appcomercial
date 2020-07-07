import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Colors from './Colors';
const { width, hight } = Dimensions.get('window');

//ESTILOS CONTAINERS GLOBAIS
export const SafeContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.transparent};    
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.white};
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

export const ContentMain = styled.View`
    flex: 1;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.white};
    margin-top: ${props => props.marginTop ? props.marginTop : '140px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

export const Content = styled.View`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.white};
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

export const ContainerCenter = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
    align-items: center;
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '0px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0px'};
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

export const ContainerColumn = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
    align-items: center;
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '0px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0px'};
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

export const ContainerScroll = styled.ScrollView`
    flex: 1;
    width: ${props => width};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.white};
    padding-top: ${props => props.paddingTop ? props.paddingTop : '0px'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0px'};
    padding-right: ${props => props.paddingRight ? props.paddingRight : '0px'};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0px'};
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

export const ContainerFooter = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const ContainerZindex = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    backgroundColor: 'rgba(255, 255, 255, 0.8)';    
`;

export const ContainerModal = styled.View`
    flex: 1;    
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    padding: 20px;
    border-radius: 25;
    margin-top: 150px
    margin-bottom: 150px
`;

export const ContainerWrapper = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const ContainerPagination = styled.View`
    flex-direction: row;
    align-items: center;    
    padding: 5px
`;

export const Hr = styled.View`
    border-bottom-width: 0.5;
    border-color: ${props => Colors.light};
    padding: 5px;
    marginLeft: 15%;
    marginRight: 15%;
    marginTop: 4.5%;
    marginBottom: 4.5%;
`;

export const Card = styled.View`
    flex: 1;
    background-color: ${props => Colors.white};
    border-width: 0.7;
    border-color: ${props => Colors.light};
    border-radius: 8;
    margin-left: ${props => props.marginLeft ? props.marginLeft : '10px'};
    margin-right: ${props => props.marginRight ? props.marginRight : '10px'};
    margin-bottom: 3px;
    padding: 8px;
    elevation: 10;
`;


//ESTILOS LABELS, TITLE, TEXT, DESCRIPTIONS GLOBAIS
export const Title = styled.Text`
    font-size: ${props => props.font ? props.font : '18px'};
    text-align: ${props => props.align ? props.align : 'center'};
    font-weight: ${props => props.weight ? props.weight : '300'};
    color: ${props => props.color ? props.color : Colors.primaryText};
    padding-left: ${props => props.left ? props.left : '0px'};
    padding-right: ${props => props.right ? props.right : '0px'};
    padding-top: ${props => props.top ? props.top : '0px'};
    padding-bottom: ${props => props.bottom ? props.bottom : '0px'};
`
export const TextBtn = styled.Text`
    font-size: ${props => props.font ? props.font : 18};
    text-align: center;
    padding-left: 13;
    padding-right: 13;
    padding-top: 5;
    padding-bottom: 5;
    color: ${props => props.color ? props.color : Colors.white};
    font-weight: 500;
`;

export const TextArea = styled.TextInput`
    font-size: ${props => props.font ? props.font : 18};
    padding-left: 13;
    padding-right: 13;
    padding-top: 6;
    padding-bottom: 6;
    color: ${props => props.color ? props.color : Colors.gray};
    font-weight: 500;
    border-width: 0.7;
    border-color: ${props => Colors.gray};
    border-radius: 3;
    margin-bottom: 10;
    margin-top: 10;
`;

export const InputText = styled.TextInput`
    padding: 10px;
    font-size: 20px;
`;

//ESTILOS BUTTONS GLOBAIS
export const Button = styled.TouchableOpacity`
    width: 100%;
    border-radius: 40px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.primary};
    padding: ${props => props.padding ? props.padding : '8px'};
    margin: 10px;    
`;

export const ButtonFull = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : Colors.primary};
    padding: ${props => props.padding ? props.padding : '8px'};
`;

//ESTILOS DE INPUTS
export const Input = styled.TextInput`
    background-color: white;
    border-width: 1;
    border-color: ${props => props.borderColor ? props.borderColor : Colors.lighter};
    border-radius: 25px;
    padding: 10px;
`;