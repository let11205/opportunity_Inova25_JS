import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search, 
  Filter, 
  Building2, 
  MapPin, 
  Calendar,
  User,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "@/assets/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const mockEditais = [
    {
      id: 1,
      title: "Fornecimento de Equipamentos de Segurança",
      organ: "Petrobrás - Unidade Santos",
      value: "R$ 450.000,00",
      deadline: "15/12/2024",
      location: "Santos, SP",
      compatibility: 95,
      status: "Aberto"
    },
    {
      id: 2,
      title: "Contratação de Serviços de Monitoramento",
      organ: "Vale S.A. - Minas Gerais",
      value: "R$ 680.000,00",
      deadline: "20/12/2024",
      location: "Belo Horizonte, MG",
      compatibility: 88,
      status: "Aberto"
    },
    {
      id: 3,
      title: "Aquisição de Sistemas de Controle de Acesso",
      organ: "Governo do Estado de São Paulo",
      value: "R$ 320.000,00",
      deadline: "10/01/2025",
      location: "São Paulo, SP",
      compatibility: 82,
      status: "Aberto"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img src={logo} alt="OpportunAI" className="h-8 w-auto brightness-0 invert" />
            <span className="text-2xl font-bold text-white">OpportunAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/perfil")} className="hover:bg-primary hover:text-primary-foreground">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="hover:bg-primary hover:text-primary-foreground">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Card className="mb-8 shadow-elegant border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Filter className="h-5 w-5" />
              Filtros de Busca
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Localização</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ac">Acre</SelectItem>
                    <SelectItem value="al">Alagoas</SelectItem>
                    <SelectItem value="ap">Amapá</SelectItem>
                    <SelectItem value="am">Amazonas</SelectItem>
                    <SelectItem value="ba">Bahia</SelectItem>
                    <SelectItem value="ce">Ceará</SelectItem>
                    <SelectItem value="df">Distrito Federal</SelectItem>
                    <SelectItem value="es">Espírito Santo</SelectItem>
                    <SelectItem value="go">Goiás</SelectItem>
                    <SelectItem value="ma">Maranhão</SelectItem>
                    <SelectItem value="mt">Mato Grosso</SelectItem>
                    <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
                    <SelectItem value="mg">Minas Gerais</SelectItem>
                    <SelectItem value="pa">Pará</SelectItem>
                    <SelectItem value="pb">Paraíba</SelectItem>
                    <SelectItem value="pr">Paraná</SelectItem>
                    <SelectItem value="pe">Pernambuco</SelectItem>
                    <SelectItem value="pi">Piauí</SelectItem>
                    <SelectItem value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem value="rn">Rio Grande do Norte</SelectItem>
                    <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                    <SelectItem value="ro">Rondônia</SelectItem>
                    <SelectItem value="rr">Roraima</SelectItem>
                    <SelectItem value="sc">Santa Catarina</SelectItem>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="se">Sergipe</SelectItem>
                    <SelectItem value="to">Tocantins</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Valor</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very-low">Até R$ 50k</SelectItem>
                    <SelectItem value="low">R$ 50k - R$ 100k</SelectItem>
                    <SelectItem value="mid-low">R$ 100k - R$ 250k</SelectItem>
                    <SelectItem value="mid">R$ 250k - R$ 500k</SelectItem>
                    <SelectItem value="mid-high">R$ 500k - R$ 1M</SelectItem>
                    <SelectItem value="high">R$ 1M - R$ 5M</SelectItem>
                    <SelectItem value="very-high">Acima de R$ 5M</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Aberto</SelectItem>
                    <SelectItem value="closed">Fechado</SelectItem>
                    <SelectItem value="soon">Em breve</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Pesquisar por palavra-chave..." className="pl-10" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">Oportunidades</span> em Editais
          </h2>
          {mockEditais.map((edital) => (
            <Card key={edital.id} className="hover-lift shadow-elegant cursor-pointer border-border bg-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{edital.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        {edital.organ}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edital.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{edital.status}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground">Valor estimado</div>
                    <div className="font-semibold text-green">{edital.value}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Prazo final</div>
                    <div className="font-semibold flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edital.deadline}
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
