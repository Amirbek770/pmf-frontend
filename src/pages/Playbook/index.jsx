import { Link, Paper } from "@mui/material";
import React from "react";
import styles from "./Playbook.module.scss";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

const DATA = [
  {
    part: "I",
    title: "The Idea",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    part: "I",
    title: "A Great Team",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    part: "I",
    title: "A Great Product",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    part: "I",
    title: "Great Execution",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    part: "I",
    title: "CLOSING THOUGHT",
    image: <AccessAlarm fontSize="large" />,
  },
];

const DATA2 = [
  {
    title: "Growth",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    title: "Focus & Intensity",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    title: "Jobs of the CEO",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    title: "Hiring & Managing",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    title: "Competitors",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    title: "Making Money",
    image: <AccessAlarm fontSize="large" />,
  },
  {
    title: "Fundraising",
    image: <AccessAlarm fontSize="large" />,
  },
];

export const Playbook = () => {
  return (
    <Paper style={{ padding: 30 }}>
      <div>
        <h1 className={styles.logo}>Startup Playbook</h1>
        <h2 className={styles.logodesc}>
          Written by Otabek Suvonov and Amirbek Bozorov · Illustrated by Muslim
          ·<Link to="/"> Russian translation</Link>
        </h2>
      </div>
      <p>
        Biz startaplarga maslahat berishga ko‘p vaqt sarflaymiz. Yakkama-yakka
        maslahat har doim hal qiluvchi ahamiyatga ega bo'lsa-da, agar biz ushbu
        maslahatning eng umumlashtiriladigan qismlarini YC va YC Fellowship
        kompaniyalariga berishimiz mumkin bo'lgan o'yin kitobiga aylantira
        olsak, Y Combinator-ni kengaytirishga yordam beradi deb o'yladik.
      </p>
      <p>Keyin biz buni hammaga berishimiz kerak deb o'yladik.</p>
      <p>
        Bu startaplar dunyosiga yangi kelganlar uchun mo'ljallangan. Bularning
        aksariyati YC hamkorlari yozgan narsalarni ko'p o'qigan odamlar uchun
        yangilik bo'lmaydi - maqsad uni bir joyga to'plashdir.
      </p>
      <p>
        Keyinchalik startapni qanday kengaytirish haqida II qism bo'lishi mumkin
        - bu asosan qanday boshlashni o'z ichiga oladi.
      </p>
      <div className={styles.toc}>
        {DATA.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {item.image}
            <span>
              Part {item.part} {item.title}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.tocArrow}>
        {DATA2.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {item.image}
            <span style={{ fontSize: "14px" }}>{item.title}</span>
          </div>
        ))}
      </div>
      <p>
        Sizning boshlang'ich sifatida maqsadingiz foydalanuvchilarga yoqadigan
        narsalarni qilishdir. Agar shunday qilsangiz, qanday qilib ko'proq
        foydalanuvchilarni jalb qilishni o'ylab ko'rishingiz kerak. Ammo bu
        birinchi qism juda muhim - bugungi kunda haqiqatan ham muvaffaqiyatli
        kompaniyalar haqida o'ylang. Ularning barchasi birinchi
        foydalanuvchilari juda yaxshi ko'rgan mahsulotdan boshladilar va bu
        haqda boshqalarga aytib berishdi. Agar buni qila olmasangiz,
        muvaffaqiyatsiz bo'lasiz. Agar siz o'zingizni aldasangiz va
        foydalanuvchilar sizning mahsulotingizni yaxshi ko'rmasa ham, deb
        o'ylasangiz, baribir muvaffaqiyatsizlikka uchraysiz.
      </p>
      <p>
        Startap qabristoni bu qadamni o'tkazib yuborishi mumkin deb o'ylagan
        odamlar bilan to'la.
      </p>
      <p>
        Avval mahsulotni oz sonli foydalanuvchilarga yoqadigan qilish
        yaxshiroqdir ko'p sonli foydalanuvchilarga yoqadigan mahsulotga
        qaraganda. Jami bo'lsa ham ijobiy his-tuyg'ularning miqdori bir xil,
        ko'proq olish ancha oson foydalanuvchilar yoqtirishdan sevishga
        o'tishdan ko'ra.
      </p>
      <p>
        Ko'p sonli foydalanuvchilarga yoqadigan mahsulotdan ko'ra, birinchi
        navbatda mahsulotni oz sonli foydalanuvchilarga yoqadigan qilish
        yaxshiroqdir. Ijobiy his-tuyg'ularning umumiy miqdori bir xil bo'lsa
        ham, yoqtirishdan ko'ra ko'proq foydalanuvchilarni jalb qilish osonroq.
      </p>
      <p>
        Startapni boshlashni tanlash haqida ogohlantirish: bu yomon! YC
        asoschilaridan biz oladigan eng izchil fikr-mulohazalardan biri
        shundaki, bu ular tasavvur qilganidan ham qiyinroq, chunki ularda
        boshlang'ich ish turi va intensivligi uchun asos yo'q edi. Raketa
        traektoriyasida bo'lgan dastlabki bosqichdagi startapga qo'shilish
        odatda ancha yaxshi moliyaviy kelishuvdir.
      </p>
      <p>
        Boshqa tomondan, startap boshlash sizning karerangiz uchun unchalik
        xavfli emas - agar siz haqiqatan ham texnologiyada yaxshi bo'lsangiz,
        muvaffaqiyatsizlikka uchraganingizda ish imkoniyatlari bo'ladi.
        Ko'pchilik xavfni baholashda juda yomon. Shaxsan men o'ylaymanki,
        xavfliroq variant bu siz haqiqatan ham ishtiyoqli bo'lgan g'oya yoki
        loyihaga ega bo'lish va buning o'rniga xavfsiz, oson, bajarilmaydigan
        ishda ishlashdir.
      </p>
      <p>
        Muvaffaqiyatli startapga ega bo'lish uchun sizga kerak bo'ladi: ajoyib
        g'oya (jumladan, ajoyib bozor), ajoyib jamoa, ajoyib mahsulot va ajoyib
        ijro.
      </p>
      <div className={styles.bgIdea}>
        <img className={styles.img} src="/images/bg2.png" />
        <p>Table to content</p>
      </div>
      <p>
         YC kompaniyalaridan so'ragan birinchi narsalarimizdan biri bu ular nima qurayotgani va nima uchun.      
        </p>
        <p>
            Biz bu erda aniq, qisqa javoblarni qidiramiz. Bu sizni asoschi sifatida ham, g'oyaning o'zini ham baholash uchun. Muassis sifatida aniq fikrlash va muloqot qila olish juda muhim — bu sizga yollash, pul yig‘ish, sotish va hokazolar uchun kerak bo‘ladi. Umuman olganda, g‘oyalar tarqatish uchun aniq bo‘lishi kerak va murakkab g‘oyalar deyarli har doim chalkash fikrlash belgisidir. yoki o'ylab topilgan muammo. Agar g'oya hech bo'lmaganda ba'zi odamlarni birinchi marta eshitganida hayajonlanmasa, bu yomon.
        </p>
        <p>
        Biz so'ragan yana bir narsa, mahsulot kimga juda kerak.
        </p>
        <p>
            Eng yaxshi holatda, siz o'zingiz maqsadli foydalanuvchisiz. Ikkinchi eng yaxshi holatda, siz maqsadli foydalanuvchini juda yaxshi tushunasiz.
        </p>
        <p>
            Agar kompaniya allaqachon foydalanuvchilarga ega bo'lsa, biz bu raqam qancha va qanchalik tez o'sib borayotganini so'raymiz. Biz nima uchun u tezroq o'smayotganini aniqlashga harakat qilamiz va ayniqsa, foydalanuvchilar mahsulotni haqiqatan ham yaxshi ko'rishlarini aniqlashga harakat qilamiz. Odatda bu ular o'z do'stlariga kompaniyadan taklif qilmasdan mahsulotdan foydalanishni aytishlarini anglatadi. Biz, shuningdek, kompaniya daromad keltiryaptimi yoki yo'qligini so'raymiz, agar yo'q bo'lsa, nima uchun.
        </p>
    </Paper>
  );
};
