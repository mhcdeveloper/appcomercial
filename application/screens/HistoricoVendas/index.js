import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, ContainerScroll, Hr, ContainerWrapper } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import Search from '../../components/Search';
import Btn from '../../components/Buttons';
import ButtonHistoricoVendas from '../../components/Buttons/ButtonHistoricoVendas';
import { getListHistoricoVendasProdutos } from '../../services';
import Loading from '../../components/Loading';

const initialMeses = [
    { label: 'Jan', value: '01', actived: false },
    { label: 'Fev', value: '02', actived: false },
    { label: 'Mar', value: '03', actived: false },
    { label: 'Abr', value: '04', actived: false },
    { label: 'Mai', value: '05', actived: false },
    { label: 'Jun', value: '06', actived: false },
    { label: 'Jul', value: '07', actived: false },
    { label: 'Ago', value: '08', actived: false },
    { label: 'Set', value: '09', actived: false },
    { label: 'Out', value: '10', actived: false },
    { label: 'Nov', value: '11', actived: false },
    { label: 'Dez', value: '12', actived: false },
]

const initialAnos = [
    { label: '2018', value: '2018', actived: false },
    { label: '2019', value: '2019', actived: false },
    { label: '2020', value: '2020', actived: false },
]

export default HistoricoVenda = ({ }) => {
    const [loading, setLoading] = useState(false);
    const [produto, setProduto] = useState(false);
    const [nomeProduto, setNomeProduto] = useState(false);
    const [meses, setMeses] = useState(initialMeses);
    const [anos, setAnos] = useState(initialAnos);
    const { navigate } = useNavigation();

    const header = useSelector(state => state.header);

    function handleProduto(prod) {
        setNomeProduto(prod.DSPRODUT);
        setProduto(prod);
    }

    function handleMeses(mes) {
        let changeMeses = meses.map(m => {
            if (m.label === mes.label) {
                m.actived = !m.actived;
            }
            return m;
        });
        setMeses(changeMeses);
    }

    function handleAnos(ano) {
        let changeAnos = anos.map(a => {
            if (a.label === ano.label) {
                a.actived = !a.actived;
            }
            return a;
        });
        setAnos(changeAnos);
    }

    function pesquisar() {
        let params = [];
        let selectedAnos = anos.filter(a => a.actived == true);
        selectedAnos.map(select => {
            let data = [];
            meses.map(m => {
                if (m.actived === true) {
                    let periodo = `${m.value}/${select.value}`;
                    data.push(periodo);
                }
            });
            params.push(data);
        });
        let filter = {
            produto,
            idCliente: header.cliente.ID,
            params
        }
        if (nomeProduto != false && nomeProduto != '' && params.length > 0) {
            setLoading(true);
            getListHistoricoVendasProdutos(filter).then(historico => {
                navigate('DetalheHistorico', { dados: historico.data, nomeProduto });
                setLoading(false);
            }).catch(err => setLoading(false));
        } else {
            setLoading(false);
            alert('Campos obrigatórios em branco');
        }
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />
            {loading
                ?
                <Loading />
                :
                <>
                    <Title align="left" left="15px" top="35px" font="26px" weight="600">Histórico de Vendas</Title>
                    <Hr />
                    <Title align="left" left="15px" top="10px" bottom="10px" font="20px" color={Colors.regular}>Nome do Produto</Title>
                    <Search handleChange={handleProduto} />
                    {nomeProduto && <Title top="15px">{nomeProduto}</Title>}
                    <ContainerScroll>
                        <Container flex={1}>

                            <Title align="left" left="15px" top="15px" font="20px" color={Colors.regular}>Selecionar período</Title>

                            <Title align="left" left="15px" top="35px" font="18px" color={Colors.regular}>Ano</Title>
                            <ContainerWrapper>
                                {anos.map((a, index) => (
                                    <ButtonHistoricoVendas
                                        item={a}
                                        key={index}
                                        handleItem={handleAnos}
                                    />
                                ))}
                            </ContainerWrapper>
                            <Title align="left" left="15px" top="35px" font="18px" color={Colors.regular}>Mês</Title>
                            <ContainerWrapper>
                                {meses.map((m, index) => (
                                    <ButtonHistoricoVendas
                                        item={m}
                                        key={index}
                                        handleItem={handleMeses}
                                    />
                                ))}
                            </ContainerWrapper>
                            <Btn
                                padding="16px"
                                font="28px"
                                label="Pesquisar"
                                onSubmit={() => pesquisar()}
                                backgroundColor={Colors.primary}
                            />
                        </Container>
                    </ContainerScroll>
                </>
            }
        </Container>
    )
}