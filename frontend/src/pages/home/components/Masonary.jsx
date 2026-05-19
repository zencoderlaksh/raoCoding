import React from 'react'
import Masonry from '../../../components/Masonry';
const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1024/600/850",
    url: "https://example.com/four",
    height: 500,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1027/600/700",
    url: "https://example.com/five",
    height: 320,
  },
  {
    id: "6",
    img: "https://picsum.photos/id/1035/600/950",
    url: "https://example.com/six",
    height: 700,
  },
  {
    id: "7",
    img: "https://picsum.photos/id/1039/600/780",
    url: "https://example.com/seven",
    height: 420,
  },
  {
    id: "8",
    img: "https://picsum.photos/id/1043/600/820",
    url: "https://example.com/eight",
    height: 540,
  },
  {
    id: "9",
    img: "https://picsum.photos/id/1050/600/760",
    url: "https://example.com/nine",
    height: 360,
  },
  {
    id: "10",
    img: "https://picsum.photos/id/1062/600/880",
    url: "https://example.com/ten",
    height: 620,
  },
  {
    id: "11",
    img: "https://picsum.photos/id/1069/600/730",
    url: "https://example.com/eleven",
    height: 300,
  },
  {
    id: "12",
    img: "https://picsum.photos/id/1074/600/920",
    url: "https://example.com/twelve",
    height: 650,
  },
  {
    id: "13",
    img: "https://picsum.photos/id/1080/600/790",
    url: "https://example.com/thirteen",
    height: 430,
  },
  {
    id: "14",
    img: "https://picsum.photos/id/1084/600/860",
    url: "https://example.com/fourteen",
    height: 520,
  },
  {
    id: "15",
    img: "https://picsum.photos/id/1081/600/740",
    url: "https://example.com/fifteen",
    height: 340,
  },
  {
    id: "16",
    img: "https://picsum.photos/id/1082/600/980",
    url: "https://example.com/sixteen",
    height: 760,
  },
  {
    id: "17",
    img: "https://picsum.photos/id/1083/600/810",
    url: "https://example.com/seventeen",
    height: 470,
  },
  {
    id: "18",
    img: "https://picsum.photos/id/1085/600/870",
    url: "https://example.com/eighteen",
    height: 560,
  },
  {
    id: "19",
    img: "https://picsum.photos/id/1089/600/760",
    url: "https://example.com/nineteen",
    height: 390,
  },
  {
    id: "20",
    img: "https://picsum.photos/id/109/600/930",
    url: "https://example.com/twenty",
    height: 680,
  },
];
const Masonary = () => {
  return (
    <Masonry
  items={items}
  ease="power3.out"
  duration={0.6}
  stagger={0.05}
  animateFrom="bottom"
  scaleOnHover
  hoverScale={0.95}
  blurToFocus
  colorShiftOnHover={false}
/>

  )
}

export default Masonary