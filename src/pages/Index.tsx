import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: 'Baby',
      title: 'Подбор нянь',
      description: 'Заботливые и внимательные няни с медицинским образованием для ваших детей',
      features: ['Опыт от 5 лет', 'Педагогическое образование', 'Знание методик развития', 'Рекомендации'],
      image: 'https://cdn.poehali.dev/projects/35abe413-1156-4a35-8113-581927cba14d/files/05dd9022-9365-4f95-87fc-154a43fd3744.jpg',
      color: 'from-pink-100 to-purple-100'
    },
    {
      icon: 'Heart',
      title: 'Подбор сиделок',
      description: 'Профессиональные сиделки с медицинским образованием для ваших близких',
      features: ['Медсёстры и врачи', 'Опыт ухода', 'Круглосуточно', 'Деликатность'],
      image: 'https://cdn.poehali.dev/projects/35abe413-1156-4a35-8113-581927cba14d/files/c050875c-0e33-4d5e-bb77-aebad8411ef0.jpg',
      color: 'from-blue-100 to-indigo-100'
    },
    {
      icon: 'Sparkles',
      title: 'Подбор домработниц',
      description: 'Надежные домработницы для идеального порядка и чистоты в вашем доме',
      features: ['Проверенный опыт', 'Аккуратность', 'Гибкий график', 'Конфиденциальность'],
      image: 'https://cdn.poehali.dev/projects/35abe413-1156-4a35-8113-581927cba14d/files/3f76d25d-05ea-4fe1-8d51-0e6940385622.jpg',
      color: 'from-amber-100 to-orange-100'
    }
  ];

  const advantages = [
    { 
      icon: 'ShieldCheck', 
      title: 'Проверка персонала', 
      text: 'Тщательная проверка документов, рекомендаций и личных качеств каждого кандидата',
      gradient: 'from-rose-400 to-pink-500'
    },
    { 
      icon: 'Zap', 
      title: 'Быстрый подбор', 
      text: 'Находим идеального специалиста за 24-48 часов благодаря обширной базе',
      gradient: 'from-amber-400 to-yellow-500'
    },
    { 
      icon: 'Award', 
      title: 'Гарантия качества', 
      text: 'Бесплатная замена в течение гарантийного периода при любых несоответствиях',
      gradient: 'from-blue-400 to-cyan-500'
    },
    { 
      icon: 'Heart', 
      title: 'С душой и заботой', 
      text: 'Индивидуальный подход к каждой семье и учет всех пожеланий',
      gradient: 'from-purple-400 to-pink-500'
    },
  ];

  const testimonials = [
    { 
      name: 'Елена Петрова', 
      role: 'Мама двоих детей',
      text: 'Нашли прекрасную няню за 2 дня! Дети в восторге, я спокойна. Профессионализм на высшем уровне.', 
      rating: 5,
      avatar: '👩‍💼'
    },
    { 
      name: 'Александр Соколов', 
      role: 'Сын пожилой мамы',
      text: 'Сиделка для мамы оказалась настоящим ангелом. Внимательная, чуткая, профессиональная. Благодарю от всего сердца!', 
      rating: 5,
      avatar: '👨‍💼'
    },
    { 
      name: 'Мария Волкова', 
      role: 'Владелица дома',
      text: 'Домработница превзошла все ожидания! Чистота идеальная, пунктуальная. Агентству огромное спасибо!', 
      rating: 5,
      avatar: '👩‍💼'
    },
  ];

  const pricing = [
    { 
      title: 'Базовый', 
      price: '5 000', 
      period: 'разовая оплата',
      features: ['Подбор 3 кандидатов', 'Проверка документов', 'Консультация', 'Гарантия 1 месяц'],
      icon: '🌟',
      color: 'border-pink-200 hover:border-pink-400'
    },
    { 
      title: 'Стандарт', 
      price: '8 000',
      period: 'разовая оплата', 
      features: ['Подбор 5 кандидатов', 'Полная проверка', 'Сопровождение 3 месяца', 'Бесплатная замена', 'Юридическая поддержка'],
      popular: true,
      icon: '⭐',
      color: 'border-amber-400 bg-gradient-to-br from-amber-50 to-yellow-50'
    },
    { 
      title: 'Премиум', 
      price: '15 000',
      period: 'разовая оплата',
      features: ['Подбор до 10 кандидатов', 'VIP-проверка', 'Сопровождение 12 месяцев', 'Приоритет', 'Полное юр. сопровождение', 'Персональный менеджер'],
      icon: '💎',
      color: 'border-purple-200 hover:border-purple-400'
    },
  ];

  const faqs = [
    { q: 'Как быстро вы подбираете персонал?', a: 'В среднем подбор занимает 24-48 часов. При особых требованиях — до 5 рабочих дней. Экспресс-подбор возможен за 12 часов.' },
    { q: 'Какие гарантии вы даёте?', a: 'Гарантия от 1 до 12 месяцев в зависимости от тарифа. Бесплатная замена специалиста при несоответствии заявленным качествам в течение гарантийного срока.' },
    { q: 'Проверяете ли вы кандидатов?', a: 'Да! Проверяем паспорт, дипломы, медкнижку, судимости, рекомендации. В премиум-тарифе — психологическое тестирование и полиграф.' },
    { q: 'Можно ли встретиться с кандидатами?', a: 'Обязательно! Организуем встречи со всеми отобранными кандидатами у вас дома или в офисе. Вы выбираете наиболее подходящего.' },
    { q: 'Работаете ли вы в выходные?', a: 'Да, наш офис работает 7 дней в неделю. В выходные — с 10:00 до 18:00. Экстренные заявки принимаем круглосуточно.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в течение 15 минут.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-amber-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-amber-200/50 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                HP
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Home Profi
                </h1>
                <p className="text-xs text-gray-500">Профессиональный подбор персонала</p>
              </div>
            </div>

            <div className="hidden lg:flex gap-8 text-sm font-medium">
              <a href="#services" className="hover:text-amber-600 transition-colors">Услуги</a>
              <a href="#advantages" className="hover:text-amber-600 transition-colors">Преимущества</a>
              <a href="#testimonials" className="hover:text-amber-600 transition-colors">Отзывы</a>
              <a href="#pricing" className="hover:text-amber-600 transition-colors">Цены</a>
              <a href="#faq" className="hover:text-amber-600 transition-colors">FAQ</a>
              <a href="#contacts" className="hover:text-amber-600 transition-colors">Контакты</a>
            </div>

            <div className="flex items-center gap-3">
              <Button className="hidden md:flex bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
              <div className="flex flex-col gap-3 text-sm font-medium">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-600 transition-colors py-2">Услуги</a>
                <a href="#advantages" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-600 transition-colors py-2">Преимущества</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-600 transition-colors py-2">Отзывы</a>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-600 transition-colors py-2">Цены</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-600 transition-colors py-2">FAQ</a>
                <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-600 transition-colors py-2">Контакты</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-blue-100/30 to-amber-100/50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-white/70 backdrop-blur rounded-full border border-amber-200 shadow-lg">
              <span className="text-sm font-medium bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                ✨ С заботой о вашей семье с 2014 года
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-800">Найдём идеального</span>
              <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                помощника для дома
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Профессиональный подбор нянь, сиделок и домработниц. Проверенные специалисты с опытом. 
              <span className="font-semibold text-amber-700"> Гарантия качества до 12 месяцев.</span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Подобрать персонал
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-amber-300 hover:bg-amber-50">
                <Icon name="Phone" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '⚡', text: 'Подбор за 24-48 часов' },
                { icon: '🛡️', text: 'Полная проверка' },
                { icon: '💝', text: 'Индивидуальный подход' },
                { icon: '🏆', text: '500+ довольных клиентов' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/70 backdrop-blur rounded-2xl p-4 border border-amber-100 shadow-lg animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm font-medium text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
              <span className="text-sm font-semibold text-purple-700">Наши услуги</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Подбираем лучших специалистов</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Индивидуальный подход к каждой семье и тщательная проверка кандидатов
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="group overflow-hidden border-2 hover:border-amber-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur animate-scale-in" 
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <Icon name={service.icon} size={32} className="text-amber-600" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white">
                    Подобрать специалиста
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-white/50 backdrop-blur">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full">
              <span className="text-sm font-semibold text-blue-700">Почему мы</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Ваше спокойствие — наша работа</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессионализм, надежность и внимание к деталям на каждом этапе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-amber-200 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${adv.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon name={adv.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{adv.title}</h3>
                <p className="text-gray-600 leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-pink-100/30 to-blue-100/30"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-6 py-2 bg-white/80 backdrop-blur rounded-full border border-pink-200">
              <span className="text-sm font-semibold text-pink-700">Отзывы</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Истории наших клиентов</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Более 500 семей доверили нам заботу о своих близких
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx} 
                className="bg-white/80 backdrop-blur border-2 border-transparent hover:border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="text-amber-400 text-xl">⭐</div>
                    ))}
                  </div>
                  <CardDescription className="text-base italic text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-3xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-pink-300 hover:bg-pink-50">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Читать все отзывы
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white/50 backdrop-blur">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full">
              <span className="text-sm font-semibold text-amber-700">Тарифы</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Прозрачные цены без скрытых платежей</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тариф — платите только за результат
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative overflow-hidden ${plan.color} border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in ${plan.popular ? 'md:scale-105' : ''}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl shadow-lg">
                    ⭐ Популярный
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-600"> ₽</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{plan.period}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                        <span className="text-gray-700 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 text-base font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg' 
                        : 'border-2 border-amber-300 hover:bg-amber-50'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 text-gray-600">
            <p>💼 Для корпоративных клиентов действуют специальные условия</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-6 py-2 bg-white/80 backdrop-blur rounded-full border border-blue-200">
              <span className="text-sm font-semibold text-blue-700">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Часто задаваемые вопросы</h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы о нашей работе
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`} 
                className="bg-white/80 backdrop-blur rounded-2xl px-6 border-2 border-transparent hover:border-blue-200 shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-gray-800">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">💡</span>
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 pl-11">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос специалисту
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/50 backdrop-blur">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
              <span className="text-sm font-semibold text-green-700">Контакты</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Свяжитесь с нами прямо сейчас</h2>
            <p className="text-lg text-gray-600">
              Ответим на все вопросы и подберём идеального специалиста
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">📞 Контактная информация</CardTitle>
                <CardDescription>Мы всегда на связи для вас</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Телефон</p>
                    <p className="text-lg text-amber-600 font-bold">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-500">Звоните с 9:00 до 21:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email</p>
                    <p className="text-amber-600 font-medium">info@homeprofi.ru</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Адрес офиса</p>
                    <p className="text-gray-700">Москва, Тверская ул., 15</p>
                    <p className="text-sm text-gray-500">Метро Тверская</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/70 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Режим работы</p>
                    <p className="text-gray-700">Пн-Пт: 9:00 — 21:00</p>
                    <p className="text-gray-700">Сб-Вс: 10:00 — 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-amber-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">✉️ Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним вам в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                    <Input 
                      placeholder="Введите ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-2 border-gray-200 focus:border-amber-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <Input 
                      placeholder="+7 (___) ___-__-__" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="border-2 border-gray-200 focus:border-amber-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите, какой специалист вам нужен..." 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-2 border-gray-200 focus:border-amber-400"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white text-2xl font-bold">
                  HP
                </div>
                <div>
                  <h3 className="text-xl font-bold">Home Profi</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Профессиональный подбор домашнего персонала. Работаем с 2014 года.
              </p>
              <div className="flex gap-3 mt-4">
                {['Phone', 'Mail', 'MessageCircle'].map((icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center cursor-pointer transition-colors">
                    <Icon name={icon} size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Подбор нянь</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Подбор сиделок</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Подбор домработниц</a></li>
                <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Тарифы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#advantages" className="hover:text-amber-400 transition-colors">О нас</a></li>
                <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Отзывы</a></li>
                <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
                <li><a href="#contacts" className="hover:text-amber-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-amber-400" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-amber-400" />
                  <span>info@homeprofi.ru</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="text-amber-400 mt-1" />
                  <span>Москва, Тверская ул., 15</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Home Profi. Все права защищены. | 
              <a href="#" className="hover:text-amber-400 transition-colors ml-2">Политика конфиденциальности</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
