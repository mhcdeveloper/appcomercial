import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ContentMain } from '../../styles';
import Header from '../../components/Header';
import IconLabel from '../../components/IconLabel';
import Colors from '../../styles/Colors';
import BtnFull from '../../components/Buttons/BtnFull';
import { ScrollView } from 'react-native-gesture-handler';
import Search from '../../components/Search';
import { getUser } from '../../utils';

const Filter = ({ navigation }) => {
    const questions = useSelector(state => state.questions);
    const [user, setUser] = useState({});
    let validBtn = questions.filterResponse.length == questions.filters.length ? false : true;

    useEffect(() => {
        getUserAuth();
    }, []);

    async function getUserAuth() {
        let user = await getUser();
        setUser(user);
    }

    function handleNext() {
        navigation.navigate('CheckList');
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header setMenu={(show) => handleShowMenu(show)} />
            <ContentMain>
                <IconLabel icon="true" label="Bem Vindo," title={user.NMUSUARI} />
                <ScrollView>
                    {questions.filters.map((filter, index) => (
                        <Search key={index} filter={filter} />
                    ))}
                </ScrollView>
                <BtnFull
                    disabled={validBtn}
                    label="Prosseguir"
                    font="20px"
                    onSubmit={handleNext}
                />
            </ContentMain>
        </Container>
    )
}

export default Filter;