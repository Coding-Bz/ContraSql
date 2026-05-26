# KN-M-02: Datenmodellierung für MongoDB

## A) Konzeptionelles Datenmodell (30%)

<img width="1266" height="796" alt="image" src="https://github.com/user-attachments/assets/ec03ae24-f439-4e94-9a44-54a49b0dda58" />

One country has many policies and a policy is used by many countries. (Note: I only considerer contries which are in EU).
A strategy can have multiple strategy effect but a effect belongs to one strategy the reason here is that for the further adjustment and changes is this needed check out B for mor information realated to this.
A policy can have multiple strategies but a strategy belongs to one policy. (Note fiscal: goverment spending, taxes and so on)


## B) Logisches Modell für MongoDB (60%)

<img width="1566" height="1128" alt="image" src="https://github.com/user-attachments/assets/3fb1af05-e734-454b-95b5-e22668d448e9" />

So my thoughtprocess here was that I had two options to embedd strategy effect inside strategy and the other option which I've chose to have stability inside country because of the fact that one country only needs one such array and in my view this options is way more elegant.

## C) Anwendung des Schemas in MongoDB (10%)

<img width="1188" height="612" alt="image" src="https://github.com/user-attachments/assets/0a1fc7a0-a788-45c1-8d54-7c9eb17736d2" />
