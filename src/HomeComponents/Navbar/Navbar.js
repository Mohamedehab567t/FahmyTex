import React , {useEffect , useState} from 'react'
import { Search } from '@material-ui/icons'
import { Container , Wrapper , Left , Center, WhatsappDiv , SearchContainer ,MenuDivToShow, UrlContainer , MenuDiv , Url, Input , Right , ImageUrl , Image} from './StyledComponents'
import { Menu } from '@material-ui/icons'
import { Link , useLocation} from 'react-router-dom'
import axios from 'axios'
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';


function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const getCountry = async () => {
        try {
            const response = await axios.get('https://api.ipregistry.co/?key=ub4rpjc4km0nz9nd');
            localStorage.setItem("country",response.data.location.country.code.toLowerCase())
            return response.data.location.country.code.toLowerCase()
          } catch (error) {
            console.error(error);
          }
}

const Navbar = (props) => {
    const lang = localStorage.getItem("i18nextLng");
    const query = useQuery()
    const [Country , setCountry] = useState("")
    const [Loading , setLoading] = useState(true)
    const [Whiteback , setWhiteback] = useState(props.background)
    const [Up , setUp] = useState(false)
    const {t} = useTranslation()
    const ControlNavBar = () => {
        if(window.scrollY > 200){
            setWhiteback(true)
        }else{
            setWhiteback(false)
        }
    }
    const ShowMenu = () => {
        setUp(!Up)
    }
    const handlechange = (e) => {
        e.preventDefault()
        const searchquery = Array.from(document.querySelectorAll("input[data-class=search]"))
        if(searchquery[0].value != ''){
            window.location.href = '/category?q='+searchquery[0].value+'&order=1'
        }
    }

    useEffect(() => {
        getCountry().then(function (payload) {setCountry(payload);setLoading(false);})
        if(props.navbarWork){
        window.addEventListener('scroll' , ControlNavBar)
        }
        return () => {
            window.removeEventListener('scroll' , ControlNavBar)
        }            
    }, [])
    return (
        <>
                <MenuDivToShow h={Up ? "250px" : "0px"} v={Up ? "visible" : "hidden"}>
                <UrlContainer>
                    <Url> <Link to="/" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Home")}</Link> </Url>
                    <Url> <Link to="/about" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.About")}</Link> </Url>
                    <Url> <Link to="/contact" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Contact")}</Link> </Url>
                    <Url> <Link to="/exports" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Exports")}</Link> </Url>
                    <Url> <Link to="/category?key=type&value=bath towel&order=1" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Bath")}</Link> </Url>
                    <Url> <Link to="/category?key=type&value=hand towel&order=1" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Hand")}</Link> </Url>
                    <Url> <Link to="/category?key=type&value=geust towel&order=1" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Geust")}l</Link> </Url>
                </UrlContainer>
                </MenuDivToShow>
        <Container bg={Whiteback ? '#3b5998' : 'transparent'} top={Whiteback ? '0px' : 'unset'} position = {props.pos}>
            <Wrapper>
                <Left>
                    <ImageUrl href='#'>
                        <Image src={process.env.PUBLIC_URL+"/images/ed45d05c-5032-484f-a139-78fba10b8d1f-removebg-preview-1.png"}/>
                    </ImageUrl>
                    <button onClick={() => {lang == 'en' ? localStorage.setItem("i18nextLng" , 'ar') : localStorage.setItem("i18nextLng" , 'en'); window.location.reload()}} style={{"backgroundColor" : "transparent" , "border" : "none" , "color" : "white"}}>{lang == "ar" ? "English" : "العربية"}</button>
                </Left>
                <Center>
                <SearchContainer onSubmit={handlechange}>
                    <Input data-class='search' placeholder={query.get("q") ? query.get("q") : t("Navbar.Search")}/>
                    <Search style={{color:'black' , fontSize:'20px'}}/>
                </SearchContainer>
                <UrlContainer>
                    <Url> <Link to="/" style={{color:Up ? "black" : "white" , textDecoration : 'none'}}>{t("Navbar.Home")}</Link> </Url>
                    <Url> <Link to="/about" style={{color:Up ? "black" : "white" , textDecoration : 'none'}}>{t("Navbar.About")}</Link> </Url>
                    <Url> <Link to="/contact" style={{color:Up ? "black" : "white" , textDecoration : 'none'}}>{t("Navbar.Contact")}</Link> </Url>
                    <Url> <Link to="/exports" style={{color:Up ? "black" : "white" , textDecoration : 'none'}}>{t("Navbar.Exports")}</Link> </Url>
                    <Url> <a href="/category?key=type&value=bath towel&order=1" style={{color:Up ? "black" : "white" , textDecoration : 'none'}}>{t("Navbar.Bath")}</a> </Url>
                    <Url> <a href="/category?key=type&value=hand towel&order=1" style={{color:Up ? "black" : "white" , textDecoration : 'none'}}>{t("Navbar.Hand")}</a> </Url>
                    <Url> <a href="/category?key=type&value=geust towel&order=1" style={{color:Up ? "black" : "white" , textDecoration : 'none'}}>{t("Navbar.Geust")}</a> </Url>
                </UrlContainer>
                </Center>
                <Right>
                    <i className={Loading ? 'fas fa-circle-notch fa-spin' : 'flag-icon flag-icon-'+Country } style={{color:'white' , fontSize : '26px'}}></i>
                    <MenuDiv onClick={() => ShowMenu()} color={Up ? "#3b9980" : "white"}>
                    <Menu style={{"fontSize" : "30px"}}/>
                    </MenuDiv>
                </Right>
            </Wrapper>
            <WhatsappDiv href='https://api.whatsapp.com/send/?phone=201274227000&text=start conversation&app_absent=0' target='_blank'>
                <img style={{"width" : "100%"}} src="https://starpng.com/public/uploads/preview/whatsapp-clean-circle-logo-png-101576003124dgcj5kvdk7.png"/>
            </WhatsappDiv>
        </Container>
        </>
    )
}

export default Navbar
