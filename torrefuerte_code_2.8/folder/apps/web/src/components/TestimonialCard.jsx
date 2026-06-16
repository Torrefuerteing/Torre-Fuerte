import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

function TestimonialCard({ quote, author, role, company, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="break-inside-avoid mb-6"
    >
      <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
        <CardContent className="pt-6">
          <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
          
          <blockquote className="text-base leading-relaxed mb-6 italic">
            "{quote}"
          </blockquote>
          
          <div className="border-t border-border pt-4">
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
            {company && (
              <p className="text-sm text-muted-foreground">{company}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;