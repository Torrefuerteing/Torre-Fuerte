import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm();

  const onSubmit = async (data) => {
    console.log("📋 Form data:", JSON.stringify(data));
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("nombre",      data.nombre);
      formData.append("empresa",     data.empresa      || "No proporcionado");
      formData.append("telefono",    data.telefono);
      formData.append("email",       data.email);
      formData.append("servicio",    data.servicio);
      formData.append("espacio",     data.espacio);
      formData.append("descripcion", data.descripcion);

      await fetch("https://script.google.com/macros/s/AKfycbyqHZPpef_GarBSDapmH06S8WobIqV5u7aKS8GJ4_J-fBnU0TcazW8Id59DLzC2YgAj6w/exec", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      toast.success("Solicitud enviada correctamente", {
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      reset();
    } catch (error) {
      console.error("❌ Error:", error);
      toast.error("Error de conexión con el servidor");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre completo *</Label>
        <Input
          id="nombre"
          type="text"
          placeholder="Juan Pérez"
          className="text-foreground"
          {...register('nombre', { required: 'El nombre es requerido' })}
        />
        {errors.nombre && <p className="text-sm text-destructive">{errors.nombre.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="empresa">Empresa / Negocio</Label>
        <Input
          id="empresa"
          type="text"
          placeholder="Nombre de tu empresa o negocio"
          className="text-foreground"
          {...register('empresa')}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono / WhatsApp *</Label>
          <Input
            id="telefono"
            type="tel"
            placeholder="631 299 4645"
            className="text-foreground"
            {...register('telefono', { required: 'El teléfono es requerido' })}
          />
          {errors.telefono && <p className="text-sm text-destructive">{errors.telefono.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input
            id="email"
            type="email"
            placeholder="juan@empresa.com"
            className="text-foreground"
            {...register('email', {
              required: 'El correo es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Correo electrónico inválido'
              }
            })}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="servicio">Tipo de servicio *</Label>
          <Controller
            name="servicio"
            control={control}
            rules={{ required: 'Selecciona un servicio' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger id="servicio" className="text-foreground">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pulido de Concreto">Pulido de Concreto</SelectItem>
                  <SelectItem value="Pisos Epóxicos">Pisos Epóxicos</SelectItem>
                  <SelectItem value="Restauración de Pisos">Restauración de Pisos</SelectItem>
                  <SelectItem value="Mantenimiento">Mantenimiento</SelectItem>
                  <SelectItem value="Otro / No estoy seguro">Otro / No estoy seguro</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.servicio && <p className="text-sm text-destructive">{errors.servicio.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="espacio">Tipo de espacio *</Label>
          <Controller
            name="espacio"
            control={control}
            rules={{ required: 'Selecciona un tipo de espacio' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger id="espacio" className="text-foreground">
                  <SelectValue placeholder="Selecciona el espacio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Almacén / Bodega">Almacén / Bodega</SelectItem>
                  <SelectItem value="Nave Industrial">Nave Industrial</SelectItem>
                  <SelectItem value="Local Comercial">Local Comercial</SelectItem>
                  <SelectItem value="Restaurante">Restaurante</SelectItem>
                  <SelectItem value="Oficina / Showroom">Oficina / Showroom</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.espacio && <p className="text-sm text-destructive">{errors.espacio.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="descripcion">Descripción del proyecto *</Label>
        <Textarea
          id="descripcion"
          placeholder="Cuéntanos sobre tu proyecto: tipo de instalación, área aproximada, condiciones actuales..."
          rows={5}
          className="text-foreground resize-none"
          {...register('descripcion', { required: 'La descripción es requerida' })}
        />
        {errors.descripcion && <p className="text-sm text-destructive">{errors.descripcion.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? <>Enviando...</> : <><Send className="w-4 h-4 mr-2" />Solicitar cotización</>}
      </Button>

    </form>
  );
}

export default ContactForm;