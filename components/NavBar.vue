<template>
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">

            <h1 class="logo"><a href="index.html">DevFolio</a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" class="logo"><img src="~/assets/img/logo.png" alt="" class="img-fluid"></a>-->

            <nav id="navbar" class="navbar">
                <ul>
                <li><a class="nav-link scrollto " href="#hero">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="#services">Services</a></li>
                <li><a class="nav-link scrollto " href="#work">Work</a></li>
                <li><a class="nav-link scrollto " href="#blog">Blog</a></li>
                <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->

        </div>
  </header><!-- End Header -->
</template>
<script>
export default {
    
    name: "NavBar"
}
</script>
<style lang="scss">
#header {
    transition: all 0.5s;
    z-index: 997;
    padding: 20px 0;
    background: #0062d3;
    &.header-scrolled {
        background: rgba(0, 0, 0, 0.9);
        padding: 12px 0;
    }
    & .logo {
        font-size: 28px;
        margin: 0;
        padding: 0;
        font-weight: 600;
        letter-spacing: 1px;

        a {
            color: #fff;
        }
        img {
            max-height: 40px;
        }
    }
}

.navbar {
  padding: 0;

  & ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        align-items: center;
    }
    li {
        position: relative;
    }
    & > ul > li {
        white-space: nowrap;
        padding: 10px 0 10px 30px;

        & a:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -6px;
            left: 0;
            width: 0;
            background-color: #fff;
            visibility: hidden;
            transition: all 0.3s ease-in-out 0s;
        }
    }

    & a, & a:focus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        padding: 0;
        white-space: nowrap;
        transition: 0.3s;
        letter-spacing: 0.4px;
        position: relative;
        text-transform: uppercase;

        & i, & i:focus{
            font-size: 12px;
            line-height: 0;
            margin-left: 5px;
        }
    }

    & a:hover,
    & .active:before,
    & li:hover > a:before{
        color: #fff;
        visibility: visible;
        width: 80%;
    }

    & .active, 
    & .active:focus,
    li:hover > a{
        color: #fff;
    }
    & .dropdown ul {
        display: block;
        position: absolute;
        left: 30px;
        top: calc(100% + 30px);
        margin: 0;
        padding: 10px 0;
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        background: #fff;
        box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
        transition: 0.3s;
    }

    & .dropdown ul {
        
        & li{
            min-width: 200px;

            a {
                padding: 10px 20px;
                font-size: 14px;
                text-transform: none;
                color: #4e4e4e;

                i{
                    font-size: 12px;
                }
            }
        }

        a:hover {
            color: #0078ff;
        }

        .active:hover{
            color: #0078ff;
        }

        li > a:hover{
            color: #0078ff;
        }
    }

    .dropdown:hover > ul {
        opacity: 1;
        top: 100%;
        visibility: visible;
    }

    .dropdown {
        ul {
            top: 0;
            left: calc(100% - 30px);
            visibility: hidden;

            @media (max-width: 1366px) {
                .navbar .dropdown .dropdown ul {
                    left: -90%;
                }
                .navbar .dropdown .dropdown:hover > ul {
                    left: -100%;
                }
            }
        }
        &:hover > ul {
            opacity: 1;
            top: 0;
            left: 100%;
            visibility: visible;
        }
    }
}



/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;

    @media (max-width: 991px) {
        .mobile-nav-toggle {
            display: block;
        }

        .navbar ul {
            display: none;
        }
    }
}

.navbar-mobile {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(78, 78, 78, 0.9);
    transition: 0.3s;
    z-index: 999;

    .mobile-nav-toggle {
        position: absolute;
        top: 15px;
        right: 15px;

        ul {
            display: block;
            position: absolute;
            top: 55px;
            right: 15px;
            bottom: 15px;
            left: 15px;
            padding: 10px 0;
            background-color: #fff;
            overflow-y: auto;
            transition: 0.3s;
        }
    }
    & > ul > li {
        padding: 0;
    }

    & a:hover:before,
    & li:hover > a:hover,
    & .active:before{
        visibility: hidden;
    }

    & a,
    & a:focus{
        padding: 10px 20px;
        font-size: 15px;
        color: #4e4e4e;
    }
    & a:hover, & .active, & li:hover > a {
        color: #0078ff;
    }
    & .getstarted, & .getstarted:focus {
        margin: 15px;
    }
    & .dropdown ul {
        position: static;
        display: none;
        margin: 10px 20px;
        padding: 10px 0;
        z-index: 99;
        opacity: 1;
        visibility: visible;
        background: #fff;
        box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    }
    & .dropdown ul li {
        min-width: 200px;
    }
    & .dropdown ul a {
        padding: 10px 20px;
    }
    & .dropdown ul a i {
        font-size: 12px;
    }
    & .dropdown ul a:hover, & .dropdown ul .active:hover, & .dropdown ul li:hover > a {
        color: #0078ff;
    }
    &.dropdown > .dropdown-active {
        display: block;
    }
}


</style>