import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Baby',
      title: 'Подбор нянь',
      description: 'Профессиональные няни с опытом работы и проверенными рекомендациями для заботы о ваших детях',
      features: ['Опыт от 3 лет', 'Медицинская книжка', 'Рекомендации']
    },
    {
      icon: 'Heart',
      title: 'Подбор сиделок',
      description: 'Заботливые сиделки для ухода за пожилыми людьми и людьми с ограниченными возможностями',
      features: ['Медицинское образование', 'Деликатный подход', 'Круглосуточно']
    },
    {
      icon: 'Home',
      title: 'Подбор домработниц',
      description: 'Надежные домработницы для поддержания чистоты и порядка в вашем доме',
      features: ['Опыт работы', 'Аккуратность', 'Гибкий график']
    }
  ];

  const advantages = [
    { icon: 'Shield', title: 'Проверенный персонал', text: 'Все кандидаты проходят тщательную проверку документов и рекомендаций' },
    { icon: 'Clock', title: 'Быстрый подбор', text: 'Находим подходящего специалиста в течение 24-48 часов' },
    { icon: 'Award', title: 'Гарантия качества', text: 'Бесплатная замена персонала в случае несоответствия ожиданиям' },
    { icon: 'Users', title: 'Индивидуальный подход', text: 'Учитываем все ваши пожелания и требования к кандидату' },
  ];

  const testimonials = [
    { name: 'Елена М.', text: 'Замечательное агентство! Нашли няню для дочки за 2 дня. Очень довольны профессионализмом.', rating: 5 },
    { name: 'Александр П.', text: 'Подобрали сиделку для мамы. Внимательная, заботливая. Спасибо за помощь!', rating: 5 },
    { name: 'Мария К.', text: 'Домработница просто находка! Чистота и порядок всегда. Рекомендую агентство.', rating: 5 },
  ];

  const pricing = [
    { 
      title: 'Базовый', 
      price: '5 000', 
      features: ['Подбор 3 кандидатов', 'Проверка документов', 'Консультация специалиста', 'Гарантия 1 месяц'] 
    },
    { 
      title: 'Стандарт', 
      price: '8 000', 
      features: ['Подбор 5 кандидатов', 'Полная проверка', 'Сопровождение 3 месяца', 'Бесплатная замена', 'Юридическая поддержка'],
      popular: true
    },
    { 
      title: 'Премиум', 
      price: '12 000', 
      features: ['Подбор до 10 кандидатов', 'VIP проверка', 'Сопровождение 6 месяцев', 'Приоритетная замена', 'Полное юридическое сопровождение'] 
    },
  ];

  const faqs = [
    { q: 'Как быстро вы подбираете персонал?', a: 'В среднем подбор занимает 24-48 часов. В случае особых требований может потребоваться до 5 рабочих дней.' },
    { q: 'Какие гарантии вы предоставляете?', a: 'Мы предоставляем гарантию на подобранный персонал от 1 до 6 месяцев в зависимости от тарифа. Бесплатная замена в течение гарантийного периода.' },
    { q: 'Проверяете ли вы персонал?', a: 'Да, все кандидаты проходят тщательную проверку: документы, рекомендации, медицинские книжки, а в премиум-тарифе — расширенную проверку.' },
    { q: 'Можно ли встретиться с кандидатами до принятия решения?', a: 'Конечно! Мы организуем встречи со всеми отобранными кандидатами. Вы сможете пообщаться и выбрать наиболее подходящего.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/050fdc70-be98-46a1-9201-40ca57bb68f9.jpg" alt="Home Profi" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </nav>
      </header>

      <section className="py-20 px-4 text-center animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Профессиональный подбор
            <span className="block text-primary mt-2">домашнего персонала</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Няни, сиделки и домработницы с проверенным опытом. Забота о ваших близких и доме в надежных руках.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Оставить заявку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
          <div className="flex flex-wrap gap-8 justify-center mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-primary" />
              Опыт более 10 лет
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-primary" />
              Более 500 довольных клиентов
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-primary" />
              Гарантия качества
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы подбираем квалифицированный персонал для ваших нужд
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы гарантируем качество и профессионализм на каждом этапе
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg hover:bg-accent transition-colors animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon name={adv.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Цены и тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите подходящий тариф для вас
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, idx) => (
              <Card key={idx} className={`relative animate-scale-in ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`} style={{ animationDelay: `${idx * 100}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-center">{plan.title}</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Частые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на популярные вопросы о наших услугах
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку и мы свяжемся с вами в ближайшее время
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@homeprofi.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://cdn.poehali.dev/files/050fdc70-be98-46a1-9201-40ca57bb68f9.jpg" alt="Home Profi" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm text-background/70">Профессиональный подбор домашнего персонала с 2014 года</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#services" className="hover:text-background">Подбор нянь</a></li>
                <li><a href="#services" className="hover:text-background">Подбор сиделок</a></li>
                <li><a href="#services" className="hover:text-background">Подбор домработниц</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#advantages" className="hover:text-background">О компании</a></li>
                <li><a href="#pricing" className="hover:text-background">Цены</a></li>
                <li><a href="#faq" className="hover:text-background">FAQ</a></li>
                <li><a href="#contacts" className="hover:text-background">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@homeprofi.ru</li>
                <li>Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2024 Home Profi. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;