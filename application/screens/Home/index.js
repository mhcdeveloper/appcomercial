import React, { useContext, useEffect, useState } from 'react';

import { Container, ContentMain, ContainerCenter } from '../../styles';
import Header from '../../components/Header';
import { StatusBar } from 'react-native';
import Colors from '../../styles/Colors';
import IconLabel from '../../components/IconLabel';
import ButtonSquare from '../../components/Buttons/ButtonSquare';
import BtnFull from '../../components/Buttons/BtnFull';
import { removeUser, getUser } from '../../utils';
import { AuthContext } from '../../Context';

const Home = ({ }) => {
    const [user, setUser] = useState({});
    const { signOut } = useContext(AuthContext);

    useEffect(() => {
        getUserAuth();
    }, []);

    async function getUserAuth() {
        let user = await getUser();
        setUser(user);
    }

    function handleSubmit() {
        removeUser();
        signOut();
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header setMenu={(show) => handleShowMenu(show)} />
            <ContentMain>
                <IconLabel icon="true" label="Bem Vindo," title={user.NMUSUARI} />
                <ContainerCenter>
                    <ButtonSquare
                        rota="Modulo"
                        icon="check-circle"
                        label="CheckList"
                        IDS025={2}
                        modulo="Hora Certa"
                    />
                </ContainerCenter>
            </ContentMain>
            <BtnFull
                onSubmit={handleSubmit}
                label="Sair"
                font="20px" />
        </Container>
    )
}

export default Home;