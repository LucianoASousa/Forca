import styled from "styled-components";
import {BsLightbulbFill} from "react-icons/bs";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);

  h1 {
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg,  #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948);
    background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    font-size: 2.5rem;
    animation: HeaderAnimation 5s infinite;
    
  }

  @keyframes HeaderAnimation {
    0% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948);
    }
    5% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9);
    }
    10% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7);
    }
    15% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5);
    }
    20% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3);
    }
    25% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1);
    }
    30% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90);
    }
    35% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E);
    }
    40% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C);
    }
    90% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A);
    }
    50% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948);
    }
    55% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9);
    }
    60% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7);
    }
    65% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5);
    }
    70% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3);
    }
    75% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1);
    }
    80% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #A8B87E, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90);
    }
    85% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #B2B36C, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E);
    }
    90% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #BDAE5A, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C);
    }
    95% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #C7A948, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A);
    }
    100% {
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(110deg, #6BD5E9, #75D0D7, #80CBC5, #8AC6B3, #94C1A1, #9EBD90, #A8B87E, #B2B36C, #BDAE5A, #C7A948);
    }
  }
  
`
export const Tip = styled(BsLightbulbFill) `

  position: absolute;
  top: 0;
  left: 100%;
  transform: translate(10%, 50%);

  color: #d1a436;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: drop-shadow(0 0 0.5rem #d1a436);
    color: #fff;
  }

`